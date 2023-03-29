import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal"
import { LoginContext } from "../contexts/LoginContext";
import { RegisterContext } from "../contexts/RegisterContext";
import styles from "./LoginModal.module.css"

const LoginModal = () => {
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const { showRegister, setShowRegister } = useContext(RegisterContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        } catch (error) {
            console.log(error);
        }
    }

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