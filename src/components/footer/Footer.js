import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light fixed-bottom" >
            <Container>
                <div className="footer">
                <p>© 2021 Leaners-Zone Inc. All rights reserved. </p>
                <div className="socialIcons">
                    <a className="contact" href="https://www.facebook.com/mehediCA150/" target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                    <a className="contact" href="https://twitter.com/mehedibd9465" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a className="contact" href="https://www.linkedin.com/in/mehedi-hasan-97a23b149/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a className="contact" href="https://www.instagram.com/mehedihasan_choyon/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;