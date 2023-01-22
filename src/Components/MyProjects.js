import React from 'react'
import '../Styles/MyProject.css'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { RiExternalLinkLine } from 'react-icons/ri'
import Projec1 from '../Assets/Projec1.jpg'
import Projec2 from '../Assets/flipcoinSS.jpg'
import Projec3 from '../Assets/BoostrapSS.jpg'
import Projec4 from '../Assets/Guesstheword1.jpg'
import Projec5 from '../Assets/Loopstudio Screenshots.jpg'
import { useState } from 'react'


const MyProjects = () => {
    const [less, setLess] = useState(false)
    return (
        <section id="my-works">
            <div className="portfolio">
                <div className="proj-heading">
                    <h1>Projects</h1>
                </div>
                <div className="portfolio-content container">
                    <div className='portfolio-col'>
                        <div className="proj-1 ">
                            <img className='animate__animated animate__fadeInLeft' src={Projec1} alt='Project1' />

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
                                        <a href="https://github.com/thisisadelakun/TradExpress" target="blank">View source <RiExternalLinkLine /></a>
                                    </button>
                                    <button>
                                        <a href="https://adelakuntradexpress.netlify.app/" target="blank">Go Live <RiExternalLinkLine /></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="proj-1">
                            <img src={Projec5} alt='' />

                            <div className="proj1-details">
                                <div className='sisicon'>
                                    <SiHtml5 />
                                    <SiCss3 />
                                    <SiJavascript />
                                </div>
                                <h2>Loopstudio Landing Page</h2>
                                <p>Build Using HTML,CSS & JS</p>
                                <div className='sourcing'>
                                    <button>
                                        <a href="https://github.com/thisisadelakun/LoopStudio" target="blank">View source <RiExternalLinkLine /></a>
                                    </button>
                                    <button>
                                        <a href="https://adelakunloopstudio.netlify.app/" target="blank">Go Live <RiExternalLinkLine /></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="proj-1">
                            <img src={Projec4} alt='' />

                            <div className="proj1-details">
                                <div className='sisicon'>
                                    <SiHtml5 />
                                    <SiCss3 />
                                    <SiJavascript />
                                </div>
                                <h2>Guess the Word game</h2>
                                <p>Build Using HTML,CSS & JS</p>
                                <div className='sourcing'>
                                    <button>
                                        <a href="https://github.com/thisisadelakun/Guess-The-Word-Game" target="blank">View source <RiExternalLinkLine /></a>
                                    </button>
                                    <button>
                                        <a href="https://adelakunguessthegame.netlify.app" target="blank">Go Live <RiExternalLinkLine /></a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="proj-1">
                            <img src={Projec3} alt='' />

                            <div className="proj1-details">
                                <div className='sisicon'>
                                    <SiHtml5 />
                                    <SiCss3 />
                                </div>
                                <h2>Game Centre Landing Page</h2>
                                <p>Build Using HTML,CSS & Bootstrap</p>
                                <div className='sourcing'>
                                    <button>
                                        <a href="https://github.com/thisisadelakun/bootstrap-basic" target="blank">View source <RiExternalLinkLine /></a>
                                    </button>
                                    <button>
                                        <a href="https://adelakunboostrap.netlify.app" target="blank">Go Live <RiExternalLinkLine /></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="more-work">
                            {less && <See />}
                            <p>
                                <span onClick={() => setLess(!less)} className="less-seen" > {less ? 'SEE LESS' : 'SEE MORE'}</span>
                            </p>
                        </div>
                    </div>


                    <div className='works-arrow'>
                        <p className='works-arrow'>
                            Let's talk <br />
                            Want to get in touch or talk about a project?
                            Feel free to contact me via email at
                            <a className='contpage' href="mailto:thisisadelakun@gmail.com"> thisisadelakun@gmail.com  </a>
                            or drop a line in the form at the <a className='contpage' href='#contact-me'>contact</a>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
    function See() {
        return (

            <div>
                <div className="proj-1">
                    <img src={Projec2} alt='' />

                    <div className="proj1-details">
                        <div className='sisicon'>
                            <SiHtml5 />
                            <SiCss3 />
                            <SiJavascript />
                        </div>
                        <h2>Coin Flip Game</h2>
                        <p>Build Using HTML,CSS & JS</p>
                        <div className='sourcing'>
                            <button>
                                <a href="https://github.com/thisisadelakun/coinFlipJS" target="blank">View source <RiExternalLinkLine /></a>
                            </button>
                            <button>
                                <a href="https://adelakuncoinflip.netlify.app/" target="blank">Go Live <RiExternalLinkLine /></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}

export default MyProjects