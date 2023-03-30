import { useContext } from "react";
import { CancelConfirmContext } from "../contexts/CancelConfirmContext";
import { CancelContext } from "../contexts/CancelContext";
import { Modal } from "react-bootstrap";

const CancelConfirmModal = () => {

    const { showCancelConfirm, setShowCancelConfirm } = useContext(CancelConfirmContext)
    const { showCancel, setShowCancel } = useContext(CancelContext)

    const switchToCancelForm = () => {
        setShowCancelConfirm(false)
        setShowCancel(true)
    }
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