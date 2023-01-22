import React from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import '../Styles/Download.css'

const Download = () => {
    return (
        <div className='cvs'>
            <div className='mycv'>
                <a href="#top" className="mycvbutton">

                    <small className='mycvsmall'>Download my cv</small>
                    <span className="button-icon">
                        <FiDownloadCloud />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Download