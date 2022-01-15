import React from 'react'
import styles from './Contact.module.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoLocationSharp } from 'react-icons/io5'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

const Contact = ()=>{
    return (
        <div className={styles.majorContainer} id="co">
            <div className={styles.headerContainer}>
                <Fade left duration={1000}>
                    <h2>CONTACT</h2>
                </Fade>
                <Fade left duration={1200}>
                    <h1>CONTACT</h1>
                </Fade>
            </div>
            <Flip left cascade delay={200}>
                <div className={styles.cardContainer}>
                    <a 
                        className={styles.card} 
                        href="https://www.google.com/maps/place/SRM+Institute+of+Science+and+Technology/@12.823082,80.0442415,15z/data=!4m5!3m4!1s0x0:0xfdb944a3aee53831!8m2!3d12.823082!4d80.0442415" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <IoLocationSharp />
                        SRM IST,<br />Tamil Nadu,<br />India
                    </a>
                    <a 
                        className={styles.card} 
                        href="tel:+918334026705"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FaPhoneAlt />
                        <br />
                        +91 8334026705
                    </a>
                    <a 
                        className={styles.card} 
                        href="mailto:ultragamer046@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <HiMail />
                        ultragamer046 @gmail.com
                    </a>
                </div>
            </Flip>
        </div>
    )
}

export default Contact
