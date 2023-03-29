import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CancelConfirmContext } from "../contexts/CancelConfirmContext";
import { OrderContext } from "../contexts/OrderContext";

const OrderModal = () => {
    const { showOrder, setShowOrder } = useContext(OrderContext)
    const { showCancelConfirm, setShowCancelConfirm} = useContext(CancelConfirmContext)

    return(
        <Modal show={showOrder} onHide={() => setShowOrder(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>ORDER NUMBER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <button>CANCEL ORDER</button>
                <button onClick={() => setShowOrder(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal