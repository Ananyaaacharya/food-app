import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'

const Carouse = () => {
  return (
    <div className="home-carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="c1.jpg"
            alt="First slide"
            style={{ width: '100%', height: '400px' }}
          />
          <Carousel.Caption>
            <p>Welcome To Sahyadri Cafeteria</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="c2.jpg"
            alt="Second slide"
            style={{ width: '100%', height: '400px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="c3.jpg"
            alt="Third slide"
            style={{ width: '100%', height: '400px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="c4.jpeg"
            alt="Last slide"
            style={{ width: '100%', height: '400px' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouse;
