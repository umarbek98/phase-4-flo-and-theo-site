import SubscribeForm from "./SubscribeForm";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import FooterInfo from "./FooterInfo";
import styles from "./Footer.module.css"

const Footer = () => {

    return (
        <div>
            <div className={styles.topFooterContainer}>
                <SubscribeForm />
                <FooterLinks />
                <SocialLinks />
            </div>
            <FooterInfo />
        </div>
    )
}

export default Footer;