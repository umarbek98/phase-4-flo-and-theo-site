import { useContext } from "react";
import Modal from "react-bootstrap/Modal"
import { RegisterContext } from "../contexts/RegisterContext";

const RegisterModal = () => {
    const { showRegister, setShowRegister } = useContext(RegisterContext)

    return (
        <Modal show={showRegister} onHide={() => setShowRegister(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Register</h2>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/> 
                <button>Login</button>
                <a>Don't have an account? Register here.</a>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => setShowRegister(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;
