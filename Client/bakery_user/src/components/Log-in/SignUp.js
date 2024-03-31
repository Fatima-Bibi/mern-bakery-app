import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
// import Login from './Login';
const SignUp = () => {
  const navigate=useNavigate();
  const [signupData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSignUpData({
      ...signupData,
      [e.target.name]: e.target.value
    });
    setError(null);
  };
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const {name,
    //   email,
    //   password
    //         } = signupData;
    axios.post('http://localhost:5000/signup',signupData)
      .then(response => {
        if (response.status === 201) {
          console.log('Form submitted successfully');
          window.alert('Form submitted successfully');
          // Clear the form after successful submission
          navigate('/login');
          setSignUpData({
            name: '',
            email: '',
            password: ''
          });
          
        }
      })
      .catch(error => {
        console.log('Error submitting form:', error);
        alert('Form not submitted');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={signupData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
