import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"; // Import axios

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleLogin = async(e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    try {
      // Check for admin credentials
      const adminCredentials = {
        email: 'anuragbachheti1999@gmail.com',
        password: 'ED5RA8#$p', // Replace with the actual admin password
      };
  
      if (email === adminCredentials.email && password === adminCredentials.password) {
        alert('Admin Login Successful');
        localStorage.setItem('authToken', 'admin-token'); // Store token
  
        // Allow admin to choose the dashboard to navigate
        const role = prompt(
          'Admin has access to all dashboards. Enter "admin", "member", or "user" to choose a dashboard:',
          'admin'
        );
  
        console.log("Admin selected role:", role);
  
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "member") {
          navigate("/member-dashboard");
        } else if (role === "user") {
          navigate("/user-dashboard");
        } else {
          alert("Invalid selection. Try again.");
        }
      } else {
        // Proceed with regular user login
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });
  
        console.log("Server Response:", response.data);
  
        if (response.status === 200) {
          alert("Login Successful");
  
          const { token, user } = response.data; // Extract token & user
          localStorage.setItem("authToken", token);
          localStorage.setItem("userRole", user.role);
          localStorage.setItem("userName", user.name);
  
          console.log("User Role:", user.role);
  
          if (user.role === "member") {
            navigate("/member-dashboard");
          } else if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            alert("Invalid role assigned. Please contact support.");
          }
        } else {
          // alert("Invalid credentials or unauthorized access.");
        }
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

return (
  <div style={styles.loginContainer}>
    <h3 style={styles.loginTitle}>Login</h3>
    <form style={styles.loginForm} onSubmit={handleLogin}>
      <div style={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          id="login-password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting} style={styles.loginButton} >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  </div>
);
};

const styles = {
  loginContainer: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  loginTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    textAlign: 'left',
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
