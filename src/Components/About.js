import React, { useState } from 'react'
import ProgressBar from '../Containers/ProgressBar';
import '../Styles/About.css';
import NewGallery from '../Containers/NewGallery'
import '../Styles/NewGallery.css';
import { GiBrain } from 'react-icons/gi';
import Download from '../Containers/Download';
import { TfiGallery } from 'react-icons/tfi'


const About = () => {
    const [less, setLess] = useState(false)
    return (
        <section className="about-me" id="about">
            <div>
                <div className="about-content">
                    <div className="left-content container">
                        <div>
                            <h1 className="about-heading">About Me</h1>
                        </div>
                        <p>
                            I am a Full Stack Web developer. I am also a  graduate of Science Laboratory Technology (B.Tech).
                            I am a person who is positive about every aspect of life.
                            {less && <See />}
                            <span onClick={() => setLess(!less)} className='less-seen'> {less ? 'hide' : 'more...'}</span>
                        </p>
                    </div>


                    <div className='gallery'>
                        <div className='subgallery'>
                            <div className='skills-icon'>
                                <TfiGallery />
                            </div>
                            <div>
                                <span>My Gallery</span>
                            </div>
                        </div>
                        <NewGallery />
                    </div>

                    <div className="skills">
                        <div className="right-content">

                            <div className='skills-heading'>

                                <div className='skills-icon'>
                                    <GiBrain />
                                </div>

                                <div>
                                    <span className="skills-headings"> My Skills</span>
                                </div>
                            </div>

                            <div className="bar">
                                <ProgressBar />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Download />

        </section>
    )
    function See() {
        return (
            <span>
                There are many things I like to do, to see, and to experience.
                I enjoy solving problems as well as making things pretty and easy to use.
                I am a trend learner...
            </span>
        )



    }
}

export default About