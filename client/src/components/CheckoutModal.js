import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CheckoutContext } from "../contexts/CheckoutContext";
import { Modal } from "react-bootstrap"
import CartModal from "./CartModal";


const CheckoutModal = () => {
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)
    const { showCart, setShowCart } = useContext(CartContext)

    const backToCart = () => {
        setShowCheckout(false)
        setShowCart(true)
    }

    return(
        <Modal show={showCheckout} onHide={() => setShowCheckout(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Checkout</Modal.Title>
                <button onClick={backToCart}>Back to Cart</button>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <button>Purchase</button>
                <button onClick={() => setShowCheckout(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal;