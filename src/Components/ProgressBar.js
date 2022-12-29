import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../Styles/Progress.css'

function WithLabelExample() {
    const now1 = 80;
    const now2 = 73;
    const now3 = 60;
    const now4 = 50;
    const now5 = 55;
    const now6 = 20;
    return (
        <div className='progressive'>
            <div className="info">
                <span className='infosss'>HTML</span>
                <ProgressBar className='progress-line' now={now1} label={`${now1}%`} /> <br />

            </div>
            <div className="info">
                <span className='infosss'>CSS</span>
                <ProgressBar className='progress-line' now={now2} label={`${now2}%`} /> <br />

            </div>
            <div className="info">
                <span className='infosss'>BOOSTRAP</span>
                <ProgressBar className='progress-line' now={now3} label={`${now3}%`} /> <br />

            </div>
            <div className="info">
                <span className='infosss'>JAVASCRIPT</span>
                <ProgressBar className='progress-line' now={now4} label={`${now4}%`} /> <br />

            </div>
            <div className="info">
                <span className='infosss'>REACT JS</span>
                <ProgressBar className='progress-line' now={now5} label={`${now5}%`} /> <br />

            </div>
            <div className="info">
                <span className='infosss'>PYTHON</span>
                <ProgressBar className='progress-line' now={now6} label={`${now6}%`} /> <br />

            </div>

        </div>


    )
}

export default WithLabelExample;