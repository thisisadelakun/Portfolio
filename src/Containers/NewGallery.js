import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Projec1 from '../Assets/Projec1.jpg'
import Projec2 from '../Assets/flipcoinSS.jpg'
import Projec3 from '../Assets/BoostrapSS.jpg'
import Projec4 from '../Assets/Guesstheword1.jpg'

function NewGallery() {
    return (

        <Carousel className="newgallerry"  variant="dark" indicators={false} controls={true}>
            <Carousel.Item   interval={1000}>
                <img
                    width={50}
                    src={Projec2}
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item  interval={1000}>
                <img
                    className="d-block w-60"
                    src={Projec3}
                    alt="Project 3"
                />
            </Carousel.Item>

            <Carousel.Item  interval={1000}>
                <img
                    className="d-block w-60"
                    src={Projec4}
                    alt="Project 4"
                />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-60"
                    src={Projec1}
                    alt="Project 1"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default NewGallery;