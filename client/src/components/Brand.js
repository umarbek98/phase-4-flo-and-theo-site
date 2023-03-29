import styles from "./Brand.module.css"
import { useNavigate } from "react-router-dom"

const Brand = () => {

    const navigate = useNavigate()

    return(
        <div className={styles.brandContainer}>
            <img onClick={() => navigate("/")} src={require("../images/squarespace.png")} />
            <span>100% VEGAN SKIN CARE</span>
        </div>
    )
}

export default Brand;