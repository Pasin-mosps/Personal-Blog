import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link =() =>{
    return (
        <div>
                <div className='flex items-end pb-15'>
            <div>
              <a href="https://www.facebook.com/pasin.sadsara" target="blank">
              <FontAwesomeIcon icon={faFacebook} className='text-3xl mr-2 hover:text-4xl transition-all' />
              </a>
              <a href="https://www.instagram.com/mossps/" target="blank"> 
              <FontAwesomeIcon icon={faInstagram} className='text-3xl mr-2 hover:text-4xl transition-all'/>
              </a>
              <a href="https://github.com/Pasin-mosps" target="blank">
              <FontAwesomeIcon icon={faGithub} className='text-3xl mr-2 hover:text-4xl transition-all'/>
              </a>
              <a href="https://linkedin.com/in/pasin-sadsara" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl mr-2 hover:text-4xl transition-all'/>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Link;