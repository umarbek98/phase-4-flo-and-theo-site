import styles from "./OrderCard.module.css"
const OrderCard = () => {

    return(
        <div className={styles.orderCardContainer}>
            <div className={styles.orderCardHeaderContainer}>
                <h5>ORDER NUMBER</h5>
                <h5>ORDER DATE</h5>
            </div>
            <div className={styles.orderCardInfoContainer}>
                <div className={styles.orderCardImgContainer}>
                    <img alt="imgdisplay" src={require("../images/rose_clay_500x482.png")} />
                    <img alt="imgdisplay" src={require("../images/rose_clay_500x482.png")} />
                    <img alt="imgdisplay" src={require("../images/rose_clay_500x482.png")} />
                    <img alt="imgdisplay" src={require("../images/rose_clay_500x482.png")} />
                </div>
                <div>
                    <h5>DELIVERY ADDRESS</h5>
                    <h5>ESTIMATED ARRIVAL</h5>
                </div>
                <div className={styles.orderCardBtnContainer}>
                    <button>CANCEL ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;