import React from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import resume  from '../data/Abayomi_Adelakun_Resume_CV.pdf'
import '../Styles/Download.css'

const Download = () => {
    return (
        <div className='cvs'>
            <div className='mycv'>
                <a  href={resume} download="Adelakun_Resume_CV.pdf" className="mycvbutton">
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