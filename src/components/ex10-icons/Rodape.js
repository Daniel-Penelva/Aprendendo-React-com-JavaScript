import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Rodape.module.css';

function Rodape() {
    return (  
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
         </footer>
    );
}

export default Rodape;