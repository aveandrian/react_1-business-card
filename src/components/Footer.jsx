
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer(){
    return (
        <footer className='footer'>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-twitter" size='lg'/></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-facebook"  size='lg' /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-instagram"  size='lg' /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-github"  size='lg' /></a>
        </footer>
    )
}