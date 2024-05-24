import React from 'react'
import styles from './Aboutus.module.css'
import FunkyImage from '../../assets/img3.svg'
import skill1 from '../../assets/skills/skill1.svg'
import skill2 from '../../assets/skills/skill2.svg'
import skill3 from '../../assets/skills/skill3.svg'
import skill4 from '../../assets/skills/skill4.svg'
import skill5 from '../../assets/skills/skill5.svg'
import skill6 from '../../assets/skills/skill6.svg'
import skill7 from '../../assets/skills/skill7.svg'
import skill8 from '../../assets/skills/skill8.svg'
import skill9 from '../../assets/skills/skill9.svg'
import skill10 from '../../assets/skills/skill10.svg'
import skill11 from '../../assets/skills/skill11.svg'
import skill12 from '../../assets/skills/skill12.svg'
import ProfilePic from '../../assets/profilePic.svg';

import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Aboutus = ()=>{
    return(
        <div className={styles.majorContainer} id="abt">
            <div className={styles.vecImageContainer}>
                <LightSpeed left duration={700}>
                    <img src={FunkyImage} />
                </LightSpeed>
            </div>
            <div className={styles.abtusMain}>
                <div className={styles.heading}>
                    <Fade right duration={1000}>
                        <div className={styles.word}><p>ABOUT ME</p></div>
                    </Fade>
                    <Fade delay={500}>
                        <div className={styles.line}></div>
                    </Fade>
                </div>
                <div className={styles.imgContainer}>
                    <img src={ProfilePic} />
                </div>
                <Zoom>
                    <div className={styles.description}>
                        <p>
                            Greetings! I am a Full Stack Developer who graduated with a degree in Computer Science and Engineering from SRMIST, enthusiastic coder eager to contribute to teams success via hard work and always have a thirst to learn about new technologies. I always love to work on unique and creative ideas which may make our daily lives easier. I have clear understanding in frontend development from my training in html, css and javascript. Some of my other skills are as follows:
                        </p>
                    </div>
                </Zoom>

            </div>
            <Bounce bottom cascade>

                <div className={styles.skillSetContainer}>
                    <div>
                        <img src={skill1} />
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src={skill2} />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={skill12} />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div>
                        <img src={skill3} />
                        <p>REACT</p>
                    </div>
                    <div>
                        <img src={skill4} />
                        <p>NODEJS</p>
                    </div>
                    <div>
                        <img src={skill5} />
                        <p>FIREBASE</p>
                    </div>
                    <div>
                        <img src={skill7} />
                        <p>C</p>
                    </div>
                    <div>
                        <img src={skill8} />
                        <p>PYTHON</p>
                    </div>
                    <div>
                        <img src={skill9} />
                        <p>JAVA</p>
                    </div>
                    <div>
                        <img src={skill10} />
                        <p>PHP</p>
                    </div>
                    <div>
                        <img src={skill11} />
                        <p>MONGODB</p>
                    </div>
                    <div>
                        <img src={skill6} />
                        <p>SQL</p>
                    </div>

                </div>
            </Bounce>
        </div>
    )
}

export default Aboutus;
