import styles from "./SubscribeForm.module.css";
const SubscribeForm = () => {
    return(
        <div  className={styles.subscribeBtnContainer}>
            <div className={styles.subscribeTitleContainer}>
                <span>Subscribe</span>
                <span>SIGN UP WITH YOUR EMAIL ADDRESS TO RECEIVE NEWS AND UPDATES.</span>
            </div>
            <div className={styles.subscribeFieldsContainer}>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email Address"/>
            </div>
            <div >
                <button className={styles.subscribeSubmitBtn}>SUBMIT</button>
            </div>
        </div>
    )
}

export default SubscribeForm;