import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import fontawesome from '@fortawesome/fontawesome'
import { faSquareTwitter, faSquareGithub, faSquareFacebook, faSquareInstagram, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faEnvelope, faSquareTwitter,  faLinkedin, faFontAwesome, faSquareGithub, faSquareInstagram, faSquareFacebook);

import './App.css'

function App() {
  return (
   <>
    <Info />
    <About />
    <Interests />
    <Footer />
   </>
  )
}

export default App
