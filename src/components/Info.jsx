import ava from '../assets/ava.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Info(){
    return (
       <>
        <div className='info'>
            <img src={ava} width={316} className='ava' />
            <h3 className='name'>Andrei Andrianov</h3>
            <p className='role'>Frontend Developer</p>
            <a href="http://github.com/aveandrian" className='website'>http://github.com/aveandrian</a>
            <div className='connect-buttons'>
                <button className='email-button button'><FontAwesomeIcon icon="envelope" className='icon' />  Email</button>
                <button className='linkedin-button button'><FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#fcfcfc",}} className='icon' />  LinkedIn</button>
            </div>
        </div>
        </>
    )
}