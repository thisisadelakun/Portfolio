import React from 'react'
import '../Styles/Scrolls.css'
import { FiChevronsDown } from 'react-icons/fi'

const Scrolls = () => {
    return (
        <div className='scrolls'>
            <div className="angle-down-icon animate__animated animate__shakeY animate__infinite  animate__slower	s">
                <div className='scrolling'>
                    <div className="scrolldown" >
                        <div className="chevrons">
                            <div className="chevrondown"></div>
                            <div className="chevrondown"></div>
                        </div>
                    </div>
                    <div className='scrollsdown2'>
                        <a href='#about'>
                            Scroll down <FiChevronsDown />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scrolls