import React, { useState } from 'react';

const SideBar = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', width: '30vh', float: 'left', padding: '10px' }}>
      <h5>Admin Dashboard</h5>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="#addProduct" onClick={() => handleOptionClick('addProduct')}>Add Product</a></li>
        <li><a href="#orders" onClick={() => handleOptionClick('orders')}>Orders</a></li>
        {/* Add more options as needed */}
      </ul>
    </div>
  );
}

export default SideBar;
