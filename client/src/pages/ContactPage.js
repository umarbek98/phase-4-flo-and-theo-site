import Header from '../components/Header';
import styles from "./ContactPage.module.css"
const ContactPage = () => {

    return (
        <div>
            <Header />
            <div className={styles.content}>
                <img src={require("../images/ContactPage.jpg")}></img>
                <p>We can't wait to hear from you!<br/>
                    For customer service, wholesale and press enquiries,<br/> please contact <a style={{color: '#0062cc'}}>hello@floandtheo.com</a></p>
            </div>
            <form id="contactForm" action="https://formsubmit.co/umarbek98@gmail.com" >
                <div className={styles.flName}>
                    <div>
                        <label for="fname">First name:</label>
                        <input type="text" placeholder="First Name" name="fname"/>
                    </div>
                    <div>
                        <label for="lname">Last name:</label>
                        <input type="text" placeholder="Last Name" name="lname"/>
                    </div>
                </div>
                <label for="email">Email:</label>
                <input type="text" placeholder="Email Address" name="email"/>
                <label for="subject">Subject:</label>
                <input type="text" placeholder="Subject" name="subject"/>
                <label for="comment">Message:</label><br/>
                <textarea placeholder="Type your message here" rows="4" cols="100" name="comment" form="contactForm"></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactPage;