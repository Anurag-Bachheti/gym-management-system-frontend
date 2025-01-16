import React, { useState } from 'react';
// import Login from './Login';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContainers = () => {
    switch (selectedOption) {
      case 'Admin':
        return (
          <div style={styles.containers}>
            <div style={styles.container}>Login</div>
            <div style={styles.container}>Add Member</div>
            <div style={styles.container}>Update/Delete Member</div>
            <div style={styles.container}>Create Bills</div>
            <div style={styles.container}>Assign Fee Package</div>
            <div style={styles.container}>Assign Notification for Monthly</div>
            <div style={styles.container}>Report Export</div>
            <div style={styles.container}>Supplement Store</div>
            <div style={styles.container}>Diet Details</div>
          </div>
        );
      case 'Member':
        return (
          <div style={styles.containers}>
            <div style={styles.container}>Login</div>
            <div style={styles.container}>View Bill Receipts</div>
            <div style={styles.container}>View Bill Notification</div>
          </div>
        );
      case 'User':
        return (
          <div style={styles.containers}>
            <div style={styles.container}>Login</div>
            <div style={styles.container}>View Details</div>
            <div style={styles.container}>Search Records</div>
          </div>
        );
      default:
        return <p>Select an option to display containers.</p>;
    }
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.options}>
        <button onClick={() => handleOptionClick('Admin')}>Admin</button>
        <button onClick={() => handleOptionClick('Member')}>Member</button>
        <button onClick={() => handleOptionClick('User')}>User</button>
      </div>
      <div className="content">
        {renderContainers()}
      </div>
    </div>
  );
};

const styles = {
    dashboard: {
    textAlign: "center",
    padding: "20px",
    },
  
    options: {
    marginBottom: "20px",
    },
  
    optionsButton:{
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor:" #007bff",
    color: "white",
    border: "none",
    borderRadius: '5px',
    cursor: "pointer",
    },
  
    optionsButtonHover: {
    backgroundColor:" #0056b3",
    },
  
    containers: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    },
  
    container: {
    width: "150px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:" #f0f2f5",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    fontWeight: "bold",
  }
}



export default Dashboard;