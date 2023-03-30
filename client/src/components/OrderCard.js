import { useContext } from "react";
import { CancelConfirmContext } from "../contexts/CancelConfirmContext";
import { OrderContext } from "../contexts/OrderContext";
import { ViewContext } from "../contexts/ViewContext";
import styles from "./OrderCard.module.css"
const OrderCard = ({ order }) => {
    const { showCancelConfirm, setShowCancelConfirm } = useContext(CancelConfirmContext)
    const { showOrder, setShowOrder } = useContext(OrderContext)
    const { view, setView } = useContext(ViewContext)

    const viewOrder = () => {
        setView(order)
        setShowOrder(true)
    }

    return(
        <div  className={styles.orderCardContainer}>
            <div className={styles.orderCardHeaderContainer}>
                <h5>ORDER NUMBER: #{order.order_number}</h5>
                <h5>{order.order_date}</h5>
            </div>
            <div className={styles.orderCardInfoContainer}>
                <div className={styles.orderCardImgContainer}>
                    {order.order_products.map(product => <img src={product.product.image_url} />)}
                </div>
                <div>
                    <h5>{order.order_address}</h5>
                    <h5>{order.status}</h5>
                </div>
                <div className={styles.orderCardBtnContainer}>
                    <button onClick={viewOrder}>SHOW ORDER</button>
                    <button onClick={() => setShowCancelConfirm(true)}>CANCEL ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;