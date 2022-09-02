import React, { useState } from 'react';
import Styles from './IntroPage.module.css';
import ProfilePic from '../../assets/profilePic.svg';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const IntroPage = ()=>{

    const [imgStatus, setImgStatus] = useState(false);

    return(
        
        <div className={Styles.majorContainer} id="hm">
            {
                imgStatus?
                <>
                    <div className={Styles.introContainer}>
                        <div className={Styles.heading}>
                            <Fade left duration={2000}>
                                <div className={Styles.word}><p>HELLO</p></div>
                            </Fade>
                            <Fade delay={1000}>
                                <div className={Styles.line}></div>
                            </Fade>
                        </div>
                        <div className={Styles.greetings}>
                            <div className={Styles.fancyWords}>
                                <Fade left duration={2500}>
                                    <p className={Styles.backLine}>SAMANTA</p>
                                </Fade>
                                <Fade left duration={2000}>
                                    <p className={Styles.frontLine}>I AM SAMARESH SAMANTA</p>
                                </Fade>
                                <Fade left duration={2000}>
                                    <p className={Styles.frontLine1}>I AM<br/>SAMARESH SAMANTA</p>  
                                </Fade>
                            </div>
                            <Fade top delay={1400}>
                                <p className={Styles.work}>FULLSTACK WEB DEVELOPER</p>
                            </Fade>
                        </div>
                        <Bounce left delay={1000}>
                            <div className={Styles.buttonContainer}>
                                <a href="#abt" id={Styles.km}>KNOW MORE</a>
                                <a 
                                    href="https://drive.google.com/file/d/1c7E5Ymxxl7E7-uIS3MkdT9Lwxj8VhTHB/view" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id={Styles.res}
                                    >
                                    RESUME
                                </a>
                            </div>
                        </Bounce>
                    </div>
                    <div className={Styles.imgContainer}>
                        <Zoom>
                            <img src={ProfilePic} onLoad={()=>{setImgStatus(true)}}/>
                        </Zoom>
                    </div>
                </>
                :
                <div>
                    loading
                    <div className={Styles.imgContainer}>
                        <Zoom>
                            <img src={ProfilePic} onLoad={()=>{setImgStatus(true)}}/>
                        </Zoom>
                    </div>
                </div>    
            }
        </div>
    )
}

export default IntroPage;