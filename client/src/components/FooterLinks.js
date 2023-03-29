import styles from "./FooterLinks.module.css";
import { useNavigate } from "react-router-dom";

const FooterLinks = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.footerLinkContainer}>
            <a onClick={() => navigate("/blog")}>Blog</a>
            <a onClick={() => navigate("/orders")}>Orders</a>
            <a onClick={() => navigate("/faq")}>FAQ</a>
            <a onClick={() => navigate("/privacypolicy")}>Privacy Policy</a>
        </div>
    );
}

export default FooterLinks;