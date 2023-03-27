import styles from "./FooterLinks.module.css";

const FooterLinks = () => {

    return (
        <div className={styles.footerLinkContainer}>
            <a href="#">Blog</a>
            <a href="#">Orders</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
        </div>
    );
}

export default FooterLinks;