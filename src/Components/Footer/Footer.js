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
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <FaFacebookF />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <AiFillGithub />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <AiFillLinkedin />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <BsInstagram />
                    </a>
                </div>
                <p><FaRegCopyright /> 2022 Samaresh Samanta</p>
            </div>
        </div>
    )
}

export default Footer
