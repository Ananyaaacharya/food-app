import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Sahyadri Cafeteria</h1>
    <div className="nav-links"> 
      <Link to="/" className="nav-link"><h1>Home</h1></Link>
      <Link to="/Breakfast" className="nav-link"><h1>Breakfast</h1></Link> 
      <Link to="/Meal" className="nav-link"><h1>Meal</h1></Link> 
      <Link to="/Snacks" className="nav-link"><h1>Snacks</h1></Link> 
      <Link to="/Egg" className="nav-link"><h1>Egg Items</h1></Link>
      <Link to="/Chicken" className="nav-link"><h1>Chicken Items</h1></Link>  
      <Link to="/CartPage" className="nav-link"><h1>Cart</h1></Link>  
    </div>
  </nav>
);

export default Navbar;
