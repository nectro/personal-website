import React from 'react';
import Styles from './Header.module.css';

const Header = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.logoContainer}>
                <p>Sam</p>
            </div>
            <div className={Styles.navMenu}>
                <ul>
                    <li>
                        <a href="#">HOME</a>                        
                    </li>
                    <li>
                        <a href="#">ABOUT</a>                        
                    </li>
                    <li>
                        <a href="#">EDUCATION</a>                        
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