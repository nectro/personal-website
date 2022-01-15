import React from 'react'
import styles from './Footer.module.css'
import { FaRegCopyright, FaFacebookF } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'


const Footer = ()=>{
    return (
        <div className={styles.majorContainer}>
            <div className={styles.main}>
                <h2>Follow me on:</h2>
                <div>
                    <a href="https://www.facebook.com/samaresh.samanta.1656" target="_blank" rel="noopener noreferrer"> 
                        <FaFacebookF />
                    </a>
                    <a href="https://github.com/nectro" target="_blank" rel="noopener noreferrer"> 
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/samaresh-samanta-255a5b1b7/" target="_blank" rel="noopener noreferrer"> 
                        <AiFillLinkedin />
                    </a>
                    <a href="https://www.instagram.com/samaresh__samanta/" target="_blank" rel="noopener noreferrer"> 
                        <BsInstagram />
                    </a>
                </div>
                <p>designed and developed by Samaresh Samanta</p>
            </div>
        </div>
    )
}

export default Footer
