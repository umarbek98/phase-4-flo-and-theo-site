import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CancelConfirmContext } from "../contexts/CancelConfirmContext";
import { OrderContext } from "../contexts/OrderContext";
import { ViewContext } from "../contexts/ViewContext";
import ProductCard from "./ProductCard";

const OrderModal = () => {
    const { showOrder, setShowOrder } = useContext(OrderContext)
    const { showCancelConfirm, setShowCancelConfirm} = useContext(CancelConfirmContext)
    const { view, setView } = useContext(ViewContext)

    const unviewProduct = () => {
        setShowOrder(false)
        setView({})
    }

    const switchToCancelConfirm = () => {
        setShowOrder(false)
        setShowCancelConfirm(true)
    }

    return(
        <Modal show={showOrder} onHide={unviewProduct} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>ORDER NUMBER: #{view.order_number}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {view.order_products ? 
                view.order_products.map(product => <ProductCard key={product.product_id} product={product.product}/>)
            :
            null}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={switchToCancelConfirm}>CANCEL ORDER</button>
                <button onClick={unviewProduct}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal