import React, { useState} from 'react'
import ProgressBar from './ProgressBar'
import '../Styles/About.css'
import NewGallery from './NewGallery'
import "swiper/css/bundle";
import '../Styles/NewGallery.css'
import myphotoid from '../Assets/My new photo ID.png'


const About = () => {
    const [less, setLess] = useState(false)
    return (
        <section className="about-me" id="about">
            <div className="">
                <div className="about-content">
                    <div className="left-content container">
                        <div>
                            <h1 className="about-heading">About Me</h1>
                        </div>
                        <img src={myphotoid} alt="myphotoid" />
                        <p>
                            I am Full Stack Web developer. I am also a  graduate of Science Laboratory Technology (B.Tech).
                            I am a person who is positive about every aspect of life. {less && <See />} <span onClick={() => setLess(!less)} className='less-seen'> {less ? 'hide' : 'more...'}</span>
                        </p>
                    </div>

                    <div className="skills">
                        <div className="right-content">
                            <div className='skills-heading'>
                                <h1 className="skills-headings">My Skills</h1>
                            </div>
                            <div className="skills-bar">
                                <div className="bar">
                                    <ProgressBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <h2>GALLERY</h2>
                <NewGallery />

            </div>
        </section>
    )
    function See() {
        return (
            <span>
                There are many things I like to do, to see, and to experience. I enjoy solving problems as well as making things pretty and easy to use. I am a trend learner...
            </span>
        )



    }
}

export default About