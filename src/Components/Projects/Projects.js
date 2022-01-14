import React from 'react'
import styles from './Projects.module.css'

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
import project1 from '../../assets/projects/project1.svg'



const Projects = ()=>{

    const projects = [
        {
            image:project1,
            name:"EXPERT AE SOLUTIONS WEBSITE",
            description:"Lorem ipsum dolor sit amet, consectetur adipng sed do eiusmod tempor incididunt ut labore et dolore magna tempor incididunt ut labore et dolore magna ",
            github:"https://github.com/nectro/ES-India-1",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project1,
            name:"EXPERT AE SOLUTIONS WEBSITE",
            description:"Lorem ipsum dolor sit amet, consectetur adipng sed do eiusmod tempor incididunt ut labore et dolore magna tempor incididunt ut labore et dolore magna ",
            github:"https://github.com/nectro/ES-India-1",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project1,
            name:"EXPERT AE SOLUTIONS WEBSITE",
            description:"Lorem ipsum dolor sit amet, consectetur adipng sed do eiusmod tempor incididunt ut labore et dolore magna tempor incididunt ut labore et dolore magna ",
            github:"https://github.com/nectro/ES-India-1",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project1,
            name:"EXPERT AE SOLUTIONS WEBSITE",
            description:"Lorem ipsum dolor sit amet, consectetur adipng sed do eiusmod tempor incididunt ut labore et dolore magna tempor incididunt ut labore et dolore magna ",
            github:"https://github.com/nectro/ES-India-1",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project1,
            name:"EXPERT AE SOLUTIONS WEBSITE",
            description:"Lorem ipsum dolor sit amet, consectetur adipng sed do eiusmod tempor incididunt ut labore et dolore magna tempor incididunt ut labore et dolore magna ",
            github:"https://github.com/nectro/ES-India-1",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        }
    ]
    const ar = [1,2,3,4,5,6];

    return (
        <div className={styles.majorContainer}>
            <div className={styles.headerContainer}>
                <h2>PROJECTS</h2>
                <h1>PROJECTS</h1>
            </div>
            <div className={styles.projectContainer}>
                {
                    projects.map((project,key) =>(
                        <div className={styles.project} key={key} >
                            <div className={`${styles.imgHolder} ${styles.forComp}`}>
                                <a href="https://esindia.in/" target="_blank"
                            rel="noopener noreferrer">
                                    <img src={project.image} alt="project1" />
                                </a>
                            </div>
                            <div className={`${styles.description}`}>
                                <h2>{project.name}</h2>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                            <div className={`${styles.imgHolder} ${styles.forMob}`}>
                                <a href="https://esindia.in/" target="_blank"
                            rel="noopener noreferrer">
                                    <img src={project.image} alt="project1" />
                                </a>
                            </div>
                            <div className={`${styles.gitHolder} ${styles.forComp}`}>
                                <a 
                                    href={project.github} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        CODE ON GITHUB
                                </a>
                            </div>
                            <div className={`${styles.toolsHolder}`}>
                                {
                                    project.tools.map((tool,key) => 
                                        <img src={tool} alt="tool" key={key} />
                                    )
                                }
                            </div>
                            <div className={`${styles.gitHolder} ${styles.forMob}`}>
                                <a 
                                    href={project.github} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        CODE ON GITHUB
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
