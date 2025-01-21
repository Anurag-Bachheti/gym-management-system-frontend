import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      <h3>User Dashboard</h3>
      <div style={styles.userContainers}>
        <button style={styles.button}>View Details</button>
        <button style={styles.button}>Search Records</button>
        <button style={styles.button}>Request Assistance</button>
      </div>
    </div>
  );
};

const styles = {
  userContainers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserDashboard;
