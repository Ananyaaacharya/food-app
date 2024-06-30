import React, { useState, useContext } from 'react'; 
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import { CartContext } from './CartContext';

const breakfastItems = [
  {
    id: 1,
    name: 'Hot Beverages',
    price: 15,
    image: 'B1.jpeg',
  },
  {
    id: 2,
    name: 'Idli Vada',
    price: 40,
    image: 'B2.jpeg',
  },
  {
    id: 3,
    name: 'Puri Bhaji',
    price: 40,
    image: 'B3.avif',
  },
  {
    id: 4,
    name: 'Onion Dosa',
    price: 45,
    image: 'B4.jpeg',
  },
  {
    id: 5,
    name: 'Plain Dosa',
    price: 40,
    image: 'B5.jpeg',
  },
  {
    id: 6,
    name: 'Chapathi',
    price: 35,
    image: 'B6.jpeg',
  },
];

const BreakfastPage = () => {
  const { addToCart } = useContext(CartContext);
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

  const handleAddToCart = (item, quantity) => {
    if (quantity > 0) {
      console.log("Adding to cart:", item, "Quantity:", quantity); // Debugging log
      addToCart({ ...item, quantity });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Breakfast Menu</h2>
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
                <Button className="mt-2" variant="primary" onClick={() => handleAddToCart(item, quantities[index])}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BreakfastPage;
