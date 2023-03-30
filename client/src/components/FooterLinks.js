import styles from "./FooterLinks.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { CustomerContext } from "../contexts/CustomerContext";
import { useContext } from "react";

const FooterLinks = () => {

    const navigate = useNavigate()
    const { customer } = useContext(CustomerContext)
    const { showLogin, setShowLogin } = useContext(LoginContext)

    return (
        <div className={styles.footerLinkContainer}>
            <a onClick={() => navigate("/blog")}>Blog</a>
            <a onClick={() => customer ? navigate("/orders") : setShowLogin(true)}>My Orders</a>
            <a onClick={() => navigate("/faq")}>FAQ</a>
            <a onClick={() => navigate("/privacypolicy")}>Privacy Policy</a>
        </div>
    );
}

export default FooterLinks;