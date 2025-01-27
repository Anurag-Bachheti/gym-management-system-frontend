// import React, { useState } from 'react';
// // import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   // const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       alert('Signup Successful');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//     } else {
//       alert('Passwords do not match');
//     }
//   };

//   return (
//     <div style={styles.signupContainer}>
//       <h3 style={styles.signupTitle}> New User <br/> Signup</h3>
//       <form style={styles.signupForm} onSubmit={handleSignup}>
//         <div style={styles.formGroup}>
//           <label htmlFor="email">Email</label>
//           <input id="signup-email" type="email" placeholder="Enter your email" value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="signup-password">Password</label>
//           <input id="password" type="password" placeholder="Enter your password" value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input id="signup-confirm-password" type="password" placeholder="Re-enter your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button style={styles.signupButton} type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   signupContainer: {
//     width: '100%',
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   signupTitle: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   signupForm: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   formGroup: {
//     textAlign: 'left',
//   },
//   signupButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   signupButtonHover: {
//     backgroundColor: '#0056b3',
//   },
// };

// export default Signup;
