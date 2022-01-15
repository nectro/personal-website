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
import project1 from '../../assets/projects/project1.webp'
import project2 from '../../assets/projects/project2.webp'
import project3 from '../../assets/projects/project3.webp'
import project4 from '../../assets/projects/project4.webp'
import project5 from '../../assets/projects/project5.webp'
import project6 from '../../assets/projects/project6.webp'
import project7 from '../../assets/projects/project7.webp'
import project8 from '../../assets/projects/project8.webp'
import project9 from '../../assets/projects/project9.webp'
import project10 from '../../assets/projects/project10.webp'
import project11 from '../../assets/projects/project11.webp'


import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';



const Projects = ()=>{
    
    const projects = [
        {
            image:project7,
            link:"https://0fitify0.netlify.app/home",
            name:"FITIFY",
            description:"A fitness app where one can make diet charts, workout plan, hire a fitness trainer, shop for fitness items and there is a workout simulation with music player. Created in a hackathon.",
            github:"https://github.com/nectro/Fitify",
            tools:[
                skill11,
                skill4,
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project8,
            link:"https://cap.aaruush.org/",
            name:"CAP PORTAL AARUUSH",
            description:"Campus Ambassador Portal of Aaruush, basically a portal for all the campus ambassador where they will get daily tasks, monitor their progress. Its a pretty Interactive site",
            github:"https://github.com/team-envision/CAP-Portal",
            tools:[
                skill11,
                skill4,
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project2,
            link:"https://wallpy.netlify.app",
            name:"WALLPY",
            description:"A webapp where people can share and download wallpapers. The project was sort of like unSplash but mostly on wallpaper. It was made using firebase and React. ",
            github:"https://github.com/nectro/WallPy",
            tools:[
                skill3,
                skill5,
                skill1,
                skill2
            ]
        },
        {
            image:project6,
            link:"https://resonate.msclubsrm.in/",
            name:"RESONATE WEBSITE",
            description:"The website for Resonate a hackathon conducted by Microsoft Learn Student Ambassador SRM, It was built using React and the animations were implemented using tilt.js and framer-motion",
            github:"https://github.com/nectro/Hackathon-task-force",
            tools:[
                skill4,
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project9,
            link:"https://msclubsrm.in/",
            name:"MLSASRM WEBSITE",
            description:"The website for the college club Microsoft Learn Student Ambassador SRM, this is the updated website. the frontend was made using React and the backend was done in node.js",
            github:"https://github.com/nectro/mlsa-new-website",
            tools:[
                skill11,
                skill4,
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project11,
            link:"https://tsummit.aaruush.org/",
            name:"TSUMMIT WEBSITE",
            description:"the website for Tsummit an ideathon conducted by Aaruush. The front was made using ejs, html and css and the backend was done in node.js.",
            github:"https://github.com/team-envision/Teach-Bot-mern/tree/new",
            tools:[
                skill4,
                skill1,
                skill2
            ]
        },
        {
            image:project10,
            link:"https://linkskeeper.aaruush.org/",
            name:"LINKSKEEPER",
            description:"A Links bookmarking web application made in MERN stacks, this was made for TeachBot a workshop conducted by Team Envision where we taught how to make a MERN stacks application",
            github:"https://github.com/team-envision/Teach-Bot-mern/tree/new",
            tools:[
                skill11,
                skill4,
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project1,
            link:"https://esindia.in",
            name:"EXPERT AE SOLUTIONS WEBSITE",
            description:"A website for the company Expert AE Solutions, made using react. one of the libraries used for animation was React-reveal. ",
            github:"https://github.com/nectro/ES-India-1",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project3,
            link:"https://iamsamaresh.netlify.app",
            name:"PORTFOLIO WEBSITE",
            description:"My Portfolio Website made using React. Its basically a static page. all the animations are implemented using framer-motion and react-reaveal. I designed it in figma",
            github:"https://github.com/nectro/personal-website",
            tools:[
                skill3,
                skill1,
                skill2
            ]
        },
        {
            image:project4,
            link:"https://votersbay.000webhostapp.in",
            name:"CONFESS",
            description:"A website where you can send a link via ur social media and know what other people want to confess u. but u won't know there names as it will be hidden. the backend was done in php",
            github:"https://github.com/nectro/Confess",
            tools:[
                skill1,
                skill2,
                skill10,
                skill6
            ]
        },
        {
            image:project5,
            link:"https://esindia.in",
            name:"SUREPROF",
            description:"My first Website after i learned HTML, CSS and php. this was a website for my tution teacher wehere she could keep a record of all the fees paid.",
            github:"https://github.com/nectro/sureprof",
            tools:[
                skill1,
                skill2,
                skill10,
                skill6
            ]
        }
    ]
    const ar = [1,2,3,4,5,6];

    return (
        <div className={styles.majorContainer} id="pr">
            <div className={styles.headerContainer}>
                <Fade right duration={1000}>
                    <h2>PROJECTS</h2>
                </Fade>
                <Fade right duration={1500}>
                    <h1>PROJECTS</h1>
                </Fade>
            </div>
            <div className={styles.projectContainer}>
                {
                    projects.map((project,key) =>(
                        <div className={styles.project} key={key} >
                            <Flip left duration={1200}>
                                <div className={`${styles.imgHolder} ${styles.forComp}`}>
                                    <a href={project.link} target="_blank"
                                rel="noopener noreferrer">
                                        <img src={project.image} alt="project1" />
                                    </a>
                                </div>
                            </Flip>
                            <div className={`${styles.description}`}>
                                <Fade top>
                                    <h2>{project.name}</h2>
                                </Fade>
                                <Fade top>
                                    <p>
                                        {project.description}
                                    </p>
                                </Fade>
                            </div>
                            <Zoom>
                                <div className={`${styles.imgHolder} ${styles.forMob}`}>
                                    <a href={project.link} target="_blank"
                                rel="noopener noreferrer">
                                        <img src={project.image} alt="project1" />
                                    </a>
                                </div>
                            </Zoom>
                            <Zoom delay={200}>
                                <div className={`${styles.gitHolder} ${styles.forComp}`}>
                                    <a 
                                        href={project.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            CODE ON GITHUB
                                    </a>
                                </div>
                            </Zoom>
                            <Bounce right cascade delay={400}>
                                <div className={`${styles.toolsHolder}`}>
                                    {
                                        project.tools.map((tool,key) => 
                                            <img src={tool} alt="tool" key={key} />
                                        )
                                    }
                                </div>
                            </Bounce>
                            <Fade>
                                <div className={`${styles.gitHolder} ${styles.forMob}`}>
                                    <a 
                                        href={project.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            CODE ON GITHUB
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
