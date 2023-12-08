import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Navbar';

interface Product {
  name: string;
  price: string;
  image: string;
  // Add more properties as needed
}

const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as Product) || null;

  if (!state) {
    // Redirect to supplements page if no data is passed
    navigate('/supplements');
    return null; // You can return a loading indicator or another component here
  }
  
  return (
    <>
    <Header/>

    <div>
      <h2>Shopping Cart</h2>
      <div>
        <img src={state.image} alt={state.name} />
        <h3>{state.name}</h3>
        <p>{state.price}</p>
      </div>
      {/* Add more items as needed */}
    </div>
    </>
  );
};

export default ShoppingCart;