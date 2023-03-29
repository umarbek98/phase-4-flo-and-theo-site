import { useContext } from "react"
import { Form, Modal } from "react-bootstrap"
import { CancelContext } from "../contexts/CancelContext"

const CancelFormModal = () => {
    const { showCancel, setShowCancel } = useContext(CancelContext)
    return(
        <Modal show={showCancel}  size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Order Cancelled!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Why did you cancel this order?</h4>
                <Form.Select>
                    <option>Choose an option</option>
                    <option>Too expensive</option>
                    <option>Order placed by mistake</option>
                    <option>I didn't place this order</option>
                    <option>Other</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => setShowCancel(false)}>Submit</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CancelFormModal