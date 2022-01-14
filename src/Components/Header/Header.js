import React, {useState} from 'react';
import Styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle,faBars } from '@fortawesome/free-solid-svg-icons'
import { FaWindowClose } from 'react-icons/fa' 
import { AnimatePresence, motion } from 'framer-motion';
const Header = ()=>{

    const [mobNav, setMobNav] = useState(false);
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.iconContainer}>
                <a onClick={()=>{setMobNav(!mobNav)}}><FontAwesomeIcon icon={faBars} /></a>
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
                        <a href="#pr">PROJECTS</a>                        
                    </li>
                </ul>
            </div>
            <div className={Styles.contactBtn}>
                <a href="#co">CONTACT</a>
            </div>
            <AnimatePresence exitBeforeEnter>
            {
                    mobNav &&
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={Styles.backdrop}
                        >
                        <FaWindowClose onClick={()=>{setMobNav(!mobNav)}}/>
                        <a href="#hm" onClick={()=>{setMobNav(!mobNav)}}>HOME</a>
                        <a href="#abt" onClick={()=>{setMobNav(!mobNav)}}>ABOUT</a>
                        <a href="#Ed" onClick={()=>{setMobNav(!mobNav)}}>EDUCATION</a>
                        <a href="#pr" onClick={()=>{setMobNav(!mobNav)}}>PROJECTS</a>
                        <a href="#co" onClick={()=>{setMobNav(!mobNav)}}>CONTACT</a>
                    </motion.div>    
            }
            </AnimatePresence>
        </div>
    )
}

export default Header;