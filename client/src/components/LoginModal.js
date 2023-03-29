import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal"
import { LoginContext } from "../contexts/LoginContext";
import { RegisterContext } from "../contexts/RegisterContext";
import styles from "./LoginModal.module.css"



const LoginModal = () => {
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const { showRegister, setShowRegister } = useContext(RegisterContext);
    const [ loginForm, setLoginForm ] = useState({
        email: "",
        password: ""
    })

    const switchToRegister = () => {
        setShowLogin(false)
        setShowRegister(true)
    }

    const handleLoginChange = (e) => {
        const {name, value} = e.target
        console.log(name,value)
        setLoginForm({...loginForm, [name]:value})
    }

    const handleLogin = async () => {
        const loginAttempt = {
            email: loginForm.email,
            password: loginForm.password
        }
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginAttempt)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        setLoginForm(false)
    }

   
    return (
        <Modal show={showLogin} onHide={() => setShowLogin(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Body className={styles.modal_content}>
                <h2>Login to Account</h2>
                <input onChange={handleLoginChange} type="text" placeholder="Email Address"/>
                <input onChange={handleLoginChange} type="password" placeholder="Password"/> 
                <button  onClick={handleLogin} className={styles.modal_button}>Login</button>
                <a onClick={switchToRegister}>Don't have an account? <b style={{color: '#007bff'}}>Register here.</b></a>
            </Modal.Body>
            <Modal.Footer>
                <button className={styles.modal_button} onClick={() => setShowLogin(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;