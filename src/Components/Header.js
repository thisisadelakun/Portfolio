import React from 'react'
import '../Styles/Header.css'
import { BsArrowDownCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="home-content" id="home-page">
                    <div className="name">
                        <h1>Hi, I'm Adelakun</h1>
                        <p>A Web Developer in training.</p>
                    </div>
                    <div className="angle-down-icon">
                        <p className='mycv'>
                           <a href="top"> Download my cv</a>
                        </p>
                        <Link to='/About'>
                            <BsArrowDownCircle />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header


