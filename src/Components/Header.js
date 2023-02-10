import React from 'react';
import '../Styles/Header.css';
import Scrolls from '../Containers/Scrolls';
import myphotoid from '../Assets/My new photo ID.png';
import blob2 from '../Assets/circle-scatter-haikei.svg'


const Header = () => {
    return (
        <div className='header'>
            <div>
                <span className='blob1'><img src={blob2} alt='bgblob' /></span>
                <span className='blob2'><img src={blob2} alt='bgblob' /></span>
            </div>
            <div className="header-col container">

                <div className="home-content" id="home-page">
                    <h1 className='animate__animated animate__backInLeft   animate__slow	2s;'>
                        Hi, I'm Adelakun
                    </h1>
                    <p className='animate__animated animate__backInLeft animate__delay-2s	2s  animate__slow	1s animate-duration: 2s;'>

                        Web Developer
                    </p>
                    <h5 className='animate__animated animate__backInLeft animate__delay-3s	3s animate__slower	3s
                        animate-duration: 2s;'>
                        Through constant practice & learning, I make things pretty and easy to use.
                    </h5>

                    <div className='scroll1'>
                        <Scrolls />
                    </div>
                </div>

                <div className='image-col'>
                    <div className="photoids">
                        <div className="photosid ">
                            <img src={myphotoid} alt="myphotoid" />
                        </div>
                    </div>
                </div>

                <div className='scroll2'>
                    <Scrolls />
                </div>



            </div>
        </div>
    )
}

export default Header


