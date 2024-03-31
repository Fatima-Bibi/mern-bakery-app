// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// const SignUp = () => {
//   const [signupData, setSignUpData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setSignUpData({
//       ...signupData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/signup', signupData);
//       if (response.status === 200) {
//         console.log('Form submitted successfully');
//         // Clear the form after successful submission
//         setSignUpData({
//           name: '',
//           email: '',
//           password: ''
//         });
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Signup Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={signupData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={signupData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={signupData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setFormData, clearFormData } from '../redux/actions';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom'; 
// // import Login from './Login';
// import axios from 'axios';
// const SignUp = () => {
// const [signupData, setSignUpData] = useState({
//   name: '',
//   email: '',
//   password: ''
// });

//   // const dispatch = useDispatch();
//   // const formData = useSelector((state) => state);
// const [error, setError] = useState(null);
//  const navigate = useNavigate();


//   const handleChange =  (e) => {
//     console.log(e);
//     setSignUpData({
//       ...signupData,
//       [e.target.name]: e.target.value
//     });
//     // dispatch(setFormData({
//       //  )
//       //  );
      
//   };
// useEffect=()=>{
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//   try {
//     const response = await Axios.post('http://localhost:5000/api/signup', signupData);
//     if (response.status === 200) {
//       alert('Form submitted successfully');
//       navigate('/login');
//         // dispatch(clearFormData());
      
      
//     } else {
//       setError(response.data.message);
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   }
//     // try {
//     //   const response = await fetch('http://localhost:5000/api/signup', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify(signupData),
        
//     //   });
//     //   if (response.ok) {
//     //     console.log('Form submitted successfully');

//     //     navigate('/login');
//     //     dispatch(clearFormData());
        
//     //   } else {
//     //     const errorData = await response.json();
//     //     setError(errorData.message);
//     //   }
//     // } catch (error) {
//     //   console.error('Error submitting form:', error);
//     // }
//     // e.preventDefault();
//     // // Add your signup logic here
//     // console.log('Form submitted:', formData);
//     // // Reset the form after submission
//     // dispatch(clearFormData());
//   };
// };

//   return (
//     <div className="container mt-5">
//       <h2>Signup Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={signupData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={signupData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={signupData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className="btn btn-primary" >
//           Sign Up
//         </button>
        
//       </form>
//     </div>
//   );
// };

// export default SignUp;

// // //{
// //   type: 'SET_FORM_DATA',
// //   payload: {
// //     password: 'dccccvc'
// //   }
// // }
