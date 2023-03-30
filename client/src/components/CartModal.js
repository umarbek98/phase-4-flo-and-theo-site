import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./CartModal.module.css"
import { Modal } from "react-bootstrap"
import { CheckoutContext } from "../contexts/CheckoutContext";
import { LoginContext } from "../contexts/LoginContext";
import { CustomerContext } from "../contexts/CustomerContext";

const CartModal = () => {
    const { showCart, setShowCart } = useContext(CartContext)
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)
    const { showLogin, setShowLogin } = useContext(LoginContext)
    const { customer } = useContext(CustomerContext)

    const proceedToCheckout = () => {
        if(customer){
            setShowCart(false)
            setShowCheckout(true)
        } else {
            setShowCart(false)
            setShowLogin(true)
        }
        
    }
    
    return(
        <Modal show={showCart} onHide={() => setShowCart(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={proceedToCheckout}>Proceed to Checkout</button>
                <button onClick={() => setShowCart(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;