import React from 'react'
import ProgressBar from './ProgressBar'
import '../Styles/About.css'
import { useState } from 'react'
import Gallery from './Gallery'
import { Link } from 'react-router-dom'


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
                        <img src="https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png" alt="foto" />
                        <p>
                            I am currently learning Full Stack Web at Tech Studio Academy. I am also a  graduate of Science Laboratory Technology (B.Tech).
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
                <Gallery />

            </div>
            <div className='works-arrow'>
                <p className='works-arrow'>
                    Let's talk <br />
                    Want to get in touch or talk about a project?
                    Feel free to contact me via email at
                    <a className='contpage' href="mailto:thisisadelakun@gmail.com"> thisisadelakun@gmail.com  </a>
                    or drop a line in the form at the <Link className='contpage' to='/Contact'>contact page</Link>
                </p>

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