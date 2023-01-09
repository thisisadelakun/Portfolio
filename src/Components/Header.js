import React from 'react'
import '../Styles/Header.css'
import { BsArrowDownCircle } from 'react-icons/bs'


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="home-content" id="home-page">
                    <div className="name " >
                        <h1 className='animate__animated animate__backInDown animate__delay-2s	1s animate__slow	1s animate-duration: 2s;'>Hi, I'm Adelakun</h1>
                        <p className='animate__animated animate__backInUp animate__delay-2s	2s animate__slow	2s animate-duration: 2s;'>A Web Developer in training.</p>
                    </div>
                    <div className="angle-down-icon">
                        <p className='mycv'>
                           <a href="top"> Download my cv</a>
                        </p>
                        <a href='#about'>
                            <BsArrowDownCircle />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header


