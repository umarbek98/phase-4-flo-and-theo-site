import { useContext } from "react";
import Modal from "react-bootstrap/Modal"
import { LoginContext } from "../contexts/LoginContext";
import { RegisterContext } from "../contexts/RegisterContext";



const LoginModal = () => {
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const { showRegister, setShowRegister } = useContext(RegisterContext);

    const switchToRegister = () => {
        setShowLogin(false)
        setShowRegister(true)
    }
    return (
        <Modal show={showLogin} onHide={() => setShowLogin(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Login to Account</h2>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/> 
                <button>Login</button>
                <a onClick={switchToRegister}>Don't have an account? Register here.</a>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => setShowLogin(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;