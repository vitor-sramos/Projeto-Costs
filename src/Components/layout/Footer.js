import styles from "./Footer.module.css";
import {FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa"; 

function  Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebookF/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.cop_right}>
                <span>Costs &copy; 2025</span>
            </p>
        </footer>
    );
}
export default Footer;