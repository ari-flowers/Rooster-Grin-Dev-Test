import React from "react";
import { Carousel } from 'react-bootstrap';
//Bootstrap carousel featuring reviews. 
const CarouselContainer = (props) => {
    return (
        <>
            <div id="carousel-wrapper">
                <Carousel>
                    {/* first slide */}
                    <Carousel.Item interval={7000}>
                        <img 
                            className="rating"
                            src="https://i.imgur.com/5JCXNLg.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    {/* second slide */}
                    <Carousel.Item interval={7000}>
                        <img
                            className="rating"
                            src="https://i.imgur.com/yI1L7S3.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    {/* third slide */}
                    <Carousel.Item interval={7000}>
                        <img
                            className="rating"
                            src="https://i.imgur.com/rsAwfXM.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    {/* fourth slide */}
                    <Carousel.Item interval={7000}>
                        <img
                            className="rating"
                            src="https://i.imgur.com/4EiJqzg.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
};

export default CarouselContainer;