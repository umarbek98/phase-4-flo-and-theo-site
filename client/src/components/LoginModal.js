import { useContext, useReducer } from "react";
import Modal from "react-bootstrap/Modal"
import { LoginContext } from "../contexts/LoginContext";


const LoginModal = () => {
    const { showLogin, setShowLogin } = useContext(LoginContext);

    return (
        <Modal show={showLogin} onHide={() => setShowLogin(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => setShowLogin(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;