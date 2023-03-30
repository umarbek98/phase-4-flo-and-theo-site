
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./CartModal.module.css"
import { Modal } from "react-bootstrap"
import { CheckoutContext } from "../contexts/CheckoutContext";

const CartModal = ({cart}) => {
    const { showCart, setShowCart } = useContext(CartContext)
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)

    const proceedToCheckout = () => {
        setShowCart(false)
        setShowCheckout(true)
    }
    
    return(
        <Modal show={showCart} onHide={() => setShowCart(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h2>{cart.name}</h2>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={proceedToCheckout}>Proceed to Checkout</button>
                <button onClick={() => setShowCart(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;