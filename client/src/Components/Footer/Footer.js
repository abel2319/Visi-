import React from 'react'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faPhone, faAt, faLink} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faLinkedin, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer id="footer" className='footer'>
            <div className="newsletter">
                <h1 className='text-h1 newsletter-h1'>Abonnez vous a notre <span>NewsLetter</span></h1>
                <input type="text" className="newsletter-input" placeholder="Your mail or number"/>
                <Button class="btn">Subscribe</Button>
            </div>
            <div className="service-information">
                <div className="general-information">
                    <span className="general-information-logo">Visi+</span>
                    <div className="location">
                        <FontAwesomeIcon icon={faSearchLocation}/>
                        <span className="location-text">Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone}/>
                        <span className="contact-text"><a href="www.google.com">+22962614498</a></span>
                    </div>
                    <div className="mail">
                        <FontAwesomeIcon icon={faAt}/>
                        <span className="mail-text"><a href="google.com">contact@visi.bj</a></span>
                    </div>
                    <div className="webSite">
                        <FontAwesomeIcon icon={faLink}/>
                        <span className="website-text"><a href="www.visi.com">www.visi.com</a></span>
                    </div>
                </div>
                <div className="social-link">
                    <a className="social-icon" href="www.google.com"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="social-icon" href="www.google.com"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className="social-icon" href="www.google.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className="social-icon" href="www.google.com"><FontAwesomeIcon icon={faWhatsapp}/></a>
                </div>
                <div className="mention-legal">
                    <a href="www.google.com">MENTION LEGALES</a>
                    {" </> "}
                    <span> VISI+ COPYRIGHT @2021</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
