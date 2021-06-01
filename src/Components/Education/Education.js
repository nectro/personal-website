import React from 'react'
import styles from './Education.module.css'
import FancyImg from '../../assets/img4.svg'

const Education = ()=>{
    return(
        <div className={styles.majorContainer} id="Ed">
            <div className={styles.info}>
                <div className={styles.heading}>
                    <div className={styles.word}><p>EDUCATION</p></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.educationInfo}>
                    <h2>COLLEGE</h2>
                    <div>
                        <h3>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                        <p>(2020-PRESENT)</p>
                    </div>
                </div>
                <div className={styles.educationInfo}>
                    <h2>SCHOOL</h2>
                    <div>
                        <h3>METHODIST SCHOOL</h3>
                        <p>(2005-2020)</p>
                    </div>
                </div>
            </div>
            <div className={styles.vecImg}>
                <img src={FancyImg} />
            </div>
        </div>
    )
}

export default Education;