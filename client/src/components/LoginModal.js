import { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal"
import { CustomerContext } from "../contexts/CustomerContext";
import { LoginContext } from "../contexts/LoginContext";
import { RegisterContext } from "../contexts/RegisterContext";
import { useNavigate } from "react-router-dom"
import { InvalidEmailOrPassword, LoginEmpty } from "./ValidationToasts";
import styles from "./LoginModal.module.css"

const LoginModal = () => {
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const { showRegister, setShowRegister } = useContext(RegisterContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { customer, setCustomer, orders, setOrders } = useContext(CustomerContext)
    const [isLoginEmpty, setIsLoginEmpty] = useState(false) // Should be false at beginning
    const [isInvalid, setIsInvalid] = useState(false)
    const navigate = useNavigate()

    const switchToRegister = () => {
        setShowLogin(false)
        setShowRegister(true)
    }

    const onFieldChange = (e) => {
        // Reset Error Toasts
        setIsLoginEmpty(false)
        setIsInvalid(false)
        if(e.target.name === "email"){
            setEmail(e.target.value)
            console.log(email)
        } else {
            setPassword(e.target.value)
            console.log(password)
        }

    }

    const handleLogin = async () => {
        if(email === "" || password === ""){
            setIsLoginEmpty(true)
        } else {
            setIsLoginEmpty(false)
        }
        if(isLoginEmpty === false){
            try {
                const response = await fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });
                console.log(response)
                const data = await response.json();
                if(response.ok){
                    setCustomer(data)
                } else {
                    setIsInvalid(true)
                }
                console.log(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        
    }

    const getOrdersForCustomer = async () => {
        const response = await fetch(`/orders/bycustomer/${customer.customer_id}`)
        const data = await response.json()
        setOrders(data)
    }

    // Once user logs in, close modal and set orders
    useEffect(() => {
        setShowLogin(false)
        getOrdersForCustomer()
        navigate("/")
    },[customer])

    return (
        <Modal show={showLogin} onHide={() => setShowLogin(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Body className={styles.modal_content}>
                <h2>Login to Account</h2>
                {isLoginEmpty ?  <LoginEmpty /> : null}
                {isInvalid && !isLoginEmpty? <InvalidEmailOrPassword /> : null}
                <input  type="text" placeholder="Email Address" name="email"value={email} onChange={onFieldChange}/>
                <input type="password" placeholder="Password" password="password"value={password} onChange={onFieldChange}/> 
                <button className={styles.modal_button} onClick={handleLogin}>Login</button>
                <a onClick={switchToRegister}>Don't have an account? <b style={{color: '#007bff'}}>Register here.</b></a>
            </Modal.Body>
            <Modal.Footer>
                <button className={styles.modal_button} onClick={() => setShowLogin(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;