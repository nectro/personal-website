import React from 'react';
import Styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle,faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.iconContainer}>
                <a href="#"><FontAwesomeIcon icon={faBars} /></a>
            </div>
            <div className={Styles.logoContainer}>
                <p>Sam</p>
            </div>
            <div className={Styles.iconContainer}>
                <a href="#"><FontAwesomeIcon icon={faInfoCircle} /></a>
            </div>
            <div className={Styles.navMenu}>
                <ul>
                    <li>
                        <a href="#hm">HOME</a>                        
                    </li>
                    <li>
                        <a href="#abt">ABOUT</a>                        
                    </li>
                    <li>
                        <a href="#Ed">EDUCATION</a>                        
                    </li>
                    <li>
                        <a href="#">PROJECTS</a>                        
                    </li>
                </ul>
            </div>
            <div className={Styles.contactBtn}>
                <a href="#">CONTACT</a>
            </div>

        </div>
    )
}

export default Header;