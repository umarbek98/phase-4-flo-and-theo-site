import { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal"
import { CustomerContext } from "../contexts/CustomerContext";
import { LoginContext } from "../contexts/LoginContext";
import { RegisterContext } from "../contexts/RegisterContext";
import { useNavigate } from "react-router-dom"
import styles from "./LoginModal.module.css"

const LoginModal = () => {
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const { showRegister, setShowRegister } = useContext(RegisterContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { customer, setCustomer, orders, setOrders } = useContext(CustomerContext)
    const navigate = useNavigate()

    const switchToRegister = () => {
        setShowLogin(false)
        setShowRegister(true)
    }

    const handleLogin = async () => {
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log(data);
            setCustomer(data)
            
        } catch (error) {
            console.log(error);
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
                <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
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