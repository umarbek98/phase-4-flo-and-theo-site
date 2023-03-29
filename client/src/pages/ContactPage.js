import Header from '../components/Header';
import styles from "./ContactPage.module.css"
const ContactPage = () => {

    return (
        <div>
            <div className={styles.content}>
                <img src={require("../images/ContactPage.jpg")}></img>
                <p>We can't wait to hear from you!<br/>
                    For customer service, wholesale and press enquiries,<br/> please contact <a style={{color: '#0062cc'}}>hello@floandtheo.com</a></p>
            </div>
            <form id="contactForm" action="https://formsubmit.co/7731e0b8bd4627ebf6771973e1ac458d" method='POST'>
                <div className={styles.flName}>
                    <div>
                        <label for="FirstName">First name:</label>
                        <input type="text" placeholder="First Name" name="FirstName"/>
                    </div>
                    <div>
                        <label for="LastName">Last name:</label>
                        <input type="text" placeholder="Last Name" name="LastName"/>
                    </div>
                </div>
                <label for="email">Email:</label>
                <input type="text" placeholder="Email Address" name="email"/>
                <label for="subject">Subject:</label>
                <input type="text" placeholder="Subject" name="subject"/>
                <label for="comment">Message:</label><br/>
                <textarea placeholder="Type your message here" rows="4" cols="100" name="comment" form="contactForm"></textarea>
                <button className={styles.modal_button} type='submit' >Send</button>
            </form>
        </div>
    )
}

export default ContactPage;