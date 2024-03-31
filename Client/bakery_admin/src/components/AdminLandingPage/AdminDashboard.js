import React, { useState } from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <SideBar onSelectOption={handleSelectOption} />
      <MainContent selectedOption={selectedOption} />
    </div>
  );
}

export default AdminDashboard;
