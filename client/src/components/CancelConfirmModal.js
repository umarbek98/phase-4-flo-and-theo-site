import { useContext, useEffect, useState } from "react";
import { CancelConfirmContext } from "../contexts/CancelConfirmContext";
import { CancelContext } from "../contexts/CancelContext";
import { Modal } from "react-bootstrap";
import { ViewContext } from "../contexts/ViewContext";
import { CustomerContext } from "../contexts/CustomerContext";

const CancelConfirmModal = () => {

    const { showCancelConfirm, setShowCancelConfirm } = useContext(CancelConfirmContext)
    const { showCancel, setShowCancel } = useContext(CancelContext)
    const { view, setView } = useContext(ViewContext)
    const { customer, orders, setOrders } = useContext(CustomerContext)
    const [deleteCount, setDeleteCount] = useState(0)

    const switchToCancelForm = () => {
        setShowCancelConfirm(false)
        setShowCancel(true)
        console.log(view)
        handleOrderCancel()
    }

    const handleOrderCancel = async () => {
        fetch(`/orders/${view.order_id}`,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
        })
        .then((res) => console.log(res))
        setDeleteCount(deleteCount + 1)
        
    }

    useEffect(() => {
        const getOrderData = async () => {
            const response =  await fetch(`/orders/bycustomer/${customer.customer_id}`)
            const data = await response.json()
            setOrders(data)
        }
        getOrderData()
    }, [deleteCount])
    return(
        <Modal show={showCancelConfirm} onHide={() => setShowCancelConfirm(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Cancel this Order?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <button onClick={switchToCancelForm}>Yes</button>
                <button onClick={() => setShowCancelConfirm(false)}>No</button>
            </Modal.Body>
        </Modal>
    )
}

export default CancelConfirmModal;