import React from 'react'
import styles from './Education.module.css'
import FancyImg from '../../assets/img4.svg'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';

const Education = ()=>{
    return(
        <div className={styles.majorContainer} id="Ed">
            <div className={styles.info}>
                <div className={styles.heading}>
                    <Fade left duration={1000}>
                        <div className={styles.word}><p>EDUCATION</p></div>
                    </Fade>
                    <Fade delay={500}>
                        <div className={styles.line}></div>
                    </Fade>
                </div>
                <div className={styles.vecImg} id={styles.forMob}>
                    <img src={FancyImg} />
                </div>
                <div className={styles.educationInfo}>
                    <Bounce left>
                        <h2>COLLEGE</h2>
                    </Bounce>
                    <div>
                        <Fade bottom>
                            <h3>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                        </Fade>
                        <Fade top>
                            <p>(2020-PRESENT)</p>
                            <p style={{fontSize:13, width: '90%'}} > - Coursework Operating System, Coputer Networks, Data Structures and Algoriths and Coputer Architechture, etc.</p>
                            <p style={{fontSize:13, width: '90%'}} > - Completed AWS Cloud foundation Course(<a href="https://drive.google.com/file/d/1PZqRBoHiLUM32-XcjMaIWaXPT4GP6e9H/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a>)</p>
                            <p style={{fontSize:13, width: '90%'}} > - Worked on a project on Airport Management System(<a href="https://drive.google.com/file/d/1G6o-n3Z-aGsEGeXKW8VMopZrvpY3UaAf/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a>)</p>
                        </Fade>
                    </div>
                </div>
                <div className={styles.educationInfo}>
                    <Bounce left>
                        <h2>SCHOOL</h2>
                    </Bounce>
                    <div>
                        <Fade bottom>
                            <h3>METHODIST SCHOOL</h3>
                        </Fade>
                        <Fade top>
                            <p>(2005-2020)</p>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className={styles.vecImg}  id={styles.forComp}>
                <LightSpeed right>
                    <img src={FancyImg} />
                </LightSpeed>
            </div>
        </div>
    )
}

export default Education;