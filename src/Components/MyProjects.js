import React from 'react'
import '../Styles/MyProject.css'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { RiExternalLinkLine } from 'react-icons/ri'
import Projec1 from '../Assets/Projec1.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const MyProjects = () => {
    const [less, setLess] = useState(false)
    return (
        <section id="my-works">
            <div className="portfolio">
                <div className="proj-heading">
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio-content container">
                    <div className="proj-1">
                        <img src={Projec1} alt='' />

                        <div className="proj1-details">
                            <div className='sisicon'>
                                <SiHtml5 />
                                <SiCss3 />
                                <SiJavascript />
                                <GrReactjs />
                            </div>
                            <h2>Crypto Trading Website</h2>
                            <p>Build Using HTML,CSS,JS & Reactjs</p>
                            <div className='sourcing'>
                                <button>
                                    <a href="#top" target="blank">View source <RiExternalLinkLine /></a>
                                </button>
                                <button>
                                    <a href="#top" target="blank">Go Live <RiExternalLinkLine /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="proj-1">
                        <img src={Projec1} alt='' />

                        <div className="proj1-details">
                            <div className='sisicon'>
                                <SiHtml5 />
                                <SiCss3 />
                                <SiJavascript />
                                <GrReactjs />
                            </div>
                            <h2>Crypto Trading Website</h2>
                            <p>Build Using HTML,CSS,JS & Reactjs</p>
                            <div className='sourcing'>
                                <button>
                                    <a href="#top" target="blank">View source <RiExternalLinkLine /></a>
                                </button>
                                <button>
                                    <a href="#top" target="blank">Go Live <RiExternalLinkLine /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="proj-1">
                        <img src={Projec1} alt='' />

                        <div className="proj1-details">
                            <div className='sisicon'>
                                <SiHtml5 />
                                <SiCss3 />
                                <SiJavascript />
                                <GrReactjs />
                            </div>
                            <h2>Crypto Trading Website</h2>
                            <p>Build Using HTML,CSS,JS & Reactjs</p>
                            <div className='sourcing'>
                                <button>
                                    <a href="#top" target="blank">View source <RiExternalLinkLine /></a>
                                </button>
                                <button>
                                    <a href="#top" target="blank">Go Live <RiExternalLinkLine /></a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="more-work">
                        {less && <See />}
                        <p>
                            <span onClick={() => setLess(!less)} className="less-seen" > {less ? 'Less' : 'More'}</span>
                        </p>
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
                </div>
            </div>
        </section>
    )
    function See() {
        return (
            <div className="proj-1">
                <img src={Projec1} alt='' />

                <div className="proj1-details">
                    <div className='sisicon'>
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                        <GrReactjs />
                    </div>
                    <h2>Crypto Trading Website</h2>
                    <p>Build Using HTML,CSS,JS & Reactjs</p>
                    <div className='sourcing'>
                        <button>
                            <a href="#top" target="blank">View source <RiExternalLinkLine /></a>
                        </button>
                        <button>
                            <a href="#top" target="blank">Go Live <RiExternalLinkLine /></a>
                        </button>
                    </div>
                </div>
            </div>
        )



    }
}

export default MyProjects