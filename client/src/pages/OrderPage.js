import OrderList from "../components/OrderList";
import OrderModal from "../components/OrderModal";
import CancelFormModal from "../components/CancelFormModal";
import CancelConfirmModal from "../components/CancelConfirmModal";

const OrderPage = () => {

    return(
        <div>
            <h3>Your Orders</h3>
            <OrderList />
            <CancelConfirmModal />
            <CancelFormModal />
            <OrderModal />
            
        </div>
    )
}

export default OrderPage;