import React from 'react'
import '../Styles/NavBars.css'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../Containers/DarkModeToggle'
import NewNavBar from '../Containers/NewNavBar'
import MyLogo from '../Assets/MyLogo.png'


const NavBars = () => {
    return (
        <div className='mynavbars' id='mynavbars'>
            <nav className="navbar">
                <div className="navbar-contents">
                    <div className='mycanvas'>
                        <NewNavBar />
                    </div>
                    <div className='mainmenuitems'>
                        <div className="navars-branding">
                            <Link onClick="refresh" className="navars-branding" to='/'>
                                <img src={MyLogo} alt='mylogo' width={140} />
                            </Link>
                        </div>
                    </div>

                    <div className="mainitems-content">
                        <div className='menu-items'>
                            <ul class="menu-items">
                                <li>
                                    <a href="#about">About</a>
                                </li>

                                <li>
                                    <a href="#my-works">Portfolio</a>
                                </li>

                                <li>
                                    <a href="#contact-me">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='darktoggle'>
                        <DarkModeToggle />
                    </div>



                </div>

            </nav>
        </div>
    )
}

export default NavBars