import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal"
import { RegisterContext } from "../contexts/RegisterContext";
import { LoginContext } from "../contexts/LoginContext";
import styles from "./RegisterModal.module.css"

const RegisterModal = () => {
    const { showRegister, setShowRegister } = useContext(RegisterContext)
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const [ registerForm, setRegisterForm ] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
    })
    const switchToLogin = () => {
        setShowRegister(false)
        setShowLogin(true)
    }

    const handleRegisterChange = (e) => {
        const {name, value} = e.target
        console.log(name,value)
        setRegisterForm({...registerForm, [name]: value})
    }

    const submitRegistrationData = () => {
        const newRegistration = {
            email: registerForm.email,
            password: registerForm.password,
            firstName: registerForm.firstName,
            lastName: registerForm.lastName
        }

        fetch("/customers", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => console.error(err))
    }

    return (
        <Modal show={showRegister} onHide={() => setShowRegister(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header className={styles.modal_header}>
            </Modal.Header>
            <Modal.Body className={styles.modal_content}>
                <h2>Register</h2>
                <input onChange={handleRegisterChange} name="email" type="text" placeholder="Email Address"/>
                <input onChange={handleRegisterChange} name="password" type="password" placeholder="Password"/>
                <input onChange={handleRegisterChange} name="confirmPassword" type="password" placeholder="Confirm Password"/>
                <input onChange={handleRegisterChange} name="firstName" type="text" placeholder="First Name" />
                <input onChange={handleRegisterChange} name="lastName" type="text" placeholder="Last Name" />
                <button onClick={submitRegistrationData} className={styles.modal_button}>Register</button>
                <a onClick={switchToLogin}>Already have an account? <b style={{color: '#007bff'}}>Login here.</b></a>
            </Modal.Body >
            <Modal.Footer>
                <button className={styles.modal_button} onClick={() => setShowRegister(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;
