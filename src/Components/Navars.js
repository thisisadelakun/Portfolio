import React from 'react'
import '../Styles/Navars.css'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import NewNavBar from './NewNavBar'


const Navars = () => {
    return (
        <div className='mynavbars' id='mynavbars'>
            <nav className="navbar">
                <div className="navbar-contents">
                    <div className='mycanvas'>
                        <NewNavBar />
                    </div>
                    <div className='mainmenuitems'>
                        <div className="navars-branding">
                            <Link className="navars-branding" to='/'>
                                <p className="navars-branding">Adelak<span className='un'>un</span></p>
                            </Link>
                        </div>
                    </div>

                    <div className="mainitems-content">
                        <div className='menu-items'>
                            <ul class="menu-items">
                                <Link to='/About'>
                                    <li><a href="#about">About</a></li>
                                </Link>

                                <Link to='/MyProjects'>
                                    <li><a href="#my-works">Portfolio</a></li>
                                </Link>

                                <Link to='/Contact'>
                                    <li><a href="#contact-me">Contact</a></li>
                                </Link>
                            </ul>
                        </div>

                        <div className='darktoggle'>
                            <DarkModeToggle />
                        </div>

                    </div>



                </div>

            </nav>
        </div>
    )
}

export default Navars