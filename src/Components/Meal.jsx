import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const breakfastItems = [
  {
    id: 1,
    name: 'Mini Meal',
    price: 45,
    image: 'M1.jpeg',
  },
  {
    id: 2,
    name: 'Special Meal',
    price: 60,
    image: 'M2.jpeg',
  },
];

const MealPage = () => {
  const [quantities, setQuantities] = useState(breakfastItems.map(() => 0));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Meal Menu</h2>
      <Row>
        {breakfastItems.map((item, index) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: Rs.{item.price}</Card.Text>
                <div className="d-flex align-items-center">
                  <Button variant="secondary" onClick={() => handleDecrement(index)}>-</Button>
                  <span className="mx-2">{quantities[index]}</span>
                  <Button variant="secondary" onClick={() => handleIncrement(index)}>+</Button>
                </div>
                <Button className="mt-2" variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MealPage;
