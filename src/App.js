import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BreakfastPage from './Components/Breakfast'; // Corrected import statement
import Meal from './Components/Meal';
import Snacks from './Components/Snacks';
import Egg from './Components/Egg';
import Chicken from './Components/Chicken';
import CartPage from './Components/CartPage'; // Corrected import statement
import { CartProvider } from './Components/CartContext'; // Corrected import statement

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Breakfast" element={<BreakfastPage />} /> {/* Corrected component */}
            <Route path="/Meal" element={<Meal />} />
            <Route path="/Snacks" element={<Snacks />} />
            <Route path="/Egg" element={<Egg />} />
            <Route path="/Chicken" element={<Chicken />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
