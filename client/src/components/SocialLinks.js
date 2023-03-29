import { SocialIcon } from "react-social-icons"
import styles from "./SocialLinks.module.css"
const SocialLinks = () => {

    return (
        <div className={styles.socialsContainer}>
            <SocialIcon url="https://www.facebook.com/floandtheo" />
            <SocialIcon url="https://twitter.com/Floandtheo" />
            <SocialIcon url="http://instagram.com/floandtheo" />
        </div>
    )
}

export default SocialLinks;