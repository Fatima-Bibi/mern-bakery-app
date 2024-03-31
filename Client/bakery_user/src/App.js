// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/main/LandingPage';
import About from './components/Aboutus/About';
import Menu from './components/Products/Menu';
import Cake from './components/Products/Cake';
// import Pastry from './components/Pastry';
// import Bread from './components/Bread';
import Home from './components/main/Home';
import SignUp from './components/Log-in/SignUp';
import Login from './components/Log-in/Login';
const App = () => {
  return (
    <Router>
      <div>
        <LandingPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/cake" element={<Cake />} />
          {/* <Route path="/menu/pastry" element={<Pastry />} />
          <Route path="/menu/bread" element={<Bread />} /> */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
