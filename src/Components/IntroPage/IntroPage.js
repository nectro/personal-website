import React from 'react';
import Styles from './IntroPage.module.css';
import ProfilePic from '../../assets/profilePic.svg';

const IntroPage = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.introContainer}>
                <div className={Styles.heading}>
                    <div className={Styles.word}><p>HELLO</p></div>
                    <div className={Styles.line}></div>
                </div>
                <div className={Styles.greetings}>
                    <div className={Styles.fancyWords}>
                        <p className={Styles.backLine}>SAMANTA</p>
                        <p className={Styles.frontLine}>I AM SAMARESH SAMANTA</p>  
                    </div>
                    <p className={Styles.work}>FRONTEND WEB DEVELOPER</p>
                </div>
                <div className={Styles.buttonContainer}>
                    <a href="#" id={Styles.km}>KNOW MORE</a>
                    <a href="#" id={Styles.res}>RESUME</a>
                </div>
            </div>
            <div className={Styles.imgContainer}>
                <img src={ProfilePic} />
            </div>
        </div>
    )
}

export default IntroPage;