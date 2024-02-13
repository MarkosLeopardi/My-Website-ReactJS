import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {

  return (
    <div>
      <div>
        <div style={{ color: "white", textAlign: 'center' }}><h1> Links to Profiles</h1></div>
        <div style={{ textAlign: 'center' }}>
          <a href="https://www.linkedin.com/in/markos-leopardi-9a3033275/" target="_blank" title="LinkedIn" style={{ margin: '10px' }}>
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 50 }} />
          </a>
          <a href="https://www.facebook.com/mark.leopardi.7/" target="_blank" title="Facebook" style={{ margin: '10px' }}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 50 }} />
          </a>
          <a href="https://github.com/MarkosLeopardi" target="_blank" title="GitHub" style={{ margin: '10px' }}>
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 50 }} />
          </a>
          <a href="https://www.instagram.com/mark_leo97/" target="_blank" title="Instagramm" style={{ margin: '10px' }}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 50 }} />
          </a>
        </div>
      </div>

      <div>
        <div style={{ color: "white", textAlign: 'center' }}><h1>Emails</h1></div>
        <div style={{ textAlign: 'center' }}>
          <a href="mailto:markleoleo@gmail.com" style={{fontSize: 40}}>Gmail</a>
        </div>
      </div>
    </div>

  )
}

export default Contact;