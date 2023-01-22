import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi'
import '../Styles/NewNavBar.css'
import { ImHeart } from 'react-icons/im'

const NewNavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeMenu = () => setShow(false)

    return (
        <div className='myoffcanvas'>
            <GiHamburgerMenu onClick={handleShow} style={{ color: "#ffffff", width: "30px", height: "30px", cursor: "pointer" }} />

            <Offcanvas className="mycanvas" show={show} onHide={handleClose} style={{ width: "75%" }}>
                <Offcanvas.Body className="mycanvasbody">
                    <div className='mycanvaslink'>
                        <ul className="mycanvaslinks">

                            <li onClick={() => closeMenu()} exact className='mynavsection'>
                                <a  href="#App">Home</a>
                            </li>

                            <li onClick={() => closeMenu()} exact className='mynavsection'>
                                <a href="#about">About</a>
                            </li>

                            <li onClick={() => closeMenu()} exact className='mynavsection'>
                                <a href="#my-works">Portfolio</a>
                            </li>

                            <li onClick={() => closeMenu()} exact className='mynavsection'>
                                <a href="#contact-me">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='madewiths'>
                        <p className='madewiths'>Made with  <ImHeart /> by <a className='madewiths' href="https://instagram.com/thisisadelakun?igshid=YmMyMTA2M2Y=" target="blank">@thisisadelakun</a></p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default NewNavBar