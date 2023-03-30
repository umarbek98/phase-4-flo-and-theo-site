import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./CartModal.module.css"
import { Modal } from "react-bootstrap"
import { CheckoutContext } from "../contexts/CheckoutContext";
import CartCard from "./CartCard";


const CartModal = ({cart, setCart}) => {
    const { showCart, setShowCart } = useContext(CartContext)
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)

    const proceedToCheckout = () => {
        setShowCart(false)
        setShowCheckout(true)
    }

    const handleDelete = (id) => {
        const updatedCartItems = cart.filter(item => item.product_id !== id);
        setCart(updatedCartItems);
      }

    return(
        <Modal  show={showCart} onHide={() => setShowCart(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.mainContainer}>
                {cart.map(product => <CartCard id={product.product_id} product={product} onDelete={handleDelete}/>)}
            </Modal.Body>
            <Modal.Footer>
                <button className={styles.checkoutButton} onClick={proceedToCheckout}>Proceed to Checkout</button>
                <button className={styles.closeButton} onClick={() => setShowCart(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;