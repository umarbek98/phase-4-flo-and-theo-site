import { useContext } from "react";
import Modal from "react-bootstrap/Modal"
import { RegisterContext } from "../contexts/RegisterContext";
import { LoginContext } from "../contexts/LoginContext";
import styles from "./RegisterModal.module.css"

const RegisterModal = () => {
    const { showRegister, setShowRegister } = useContext(RegisterContext)
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const switchToLogin= () => {
        setShowRegister(false)
        setShowLogin(true)
    }

    return (
        <Modal show={showRegister} onHide={() => setShowRegister(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header className={styles.modal_header}>
            </Modal.Header>
            <Modal.Body className={styles.modal_content}>
                <h2>Register</h2>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button className={styles.modal_button}>Register</button>
                <a onClick={switchToLogin}>Already have an account? <b style={{color: '#007bff'}}>Login here.</b></a>
            </Modal.Body >
            <Modal.Footer>
                <button className={styles.modal_button} onClick={() => setShowRegister(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;
