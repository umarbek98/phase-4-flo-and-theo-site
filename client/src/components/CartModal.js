import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./CartModal.module.css"
import { Modal } from "react-bootstrap"
import { CheckoutContext } from "../contexts/CheckoutContext";
import CartCard from "./CartCard";


const CartModal = ({cart, setCart, addToCart}) => {
    const { showCart, setShowCart } = useContext(CartContext)
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)

    const proceedToCheckout = () => {
        setShowCart(false)
        setShowCheckout(true)
    }

    const handleDelete = (id) => {
        const exist = cart.find(item => item.product_id === id)
        if (exist.qnty === 1){
            setCart(cart.filter(item => item.product_id !== id))
        } else {
            setCart(cart.map(item => item.product_id === exist.product_id? {...exist, qnty: exist.qnty -1} : item))
        }
      }

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + (curr.price * curr.qnty)
    }, 0)

    return(
        <Modal  show={showCart} onHide={() => setShowCart(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.mainContainer}>
                {cart.map(product => <CartCard id={product.product_id} product={product} onDelete={handleDelete} addToCart={addToCart}/>)}
            </Modal.Body>
            <Modal.Footer>
                <button className={styles.checkoutButton} onClick={proceedToCheckout}>Proceed to Checkout</button>
                <button className={styles.closeButton} onClick={() => setShowCart(false)}>Close</button>
                <div className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</div>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;