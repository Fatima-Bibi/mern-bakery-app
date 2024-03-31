import React from 'react';
import AddProduct from '../Add-products/AddProduct';
import Orders from '../order/Orders';
import SideBar from './SideBar';
const MainContent = ({ selectedOption }) => {
  return (
    <div style={{ marginLeft: '30vh', padding: '20px' }}>
      {selectedOption === 'addProduct' && <AddProduct />}
      {selectedOption === 'orders' && <Orders />}
      {/* Add more conditions for other options */}
    </div>
  );
}

export default MainContent;
