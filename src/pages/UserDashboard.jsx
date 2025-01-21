import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.userContainers}>
      <h1>User Dashboard</h1>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => navigate('/user/search-records')}
        >
          Search Records
        </button>
        <button
          style={styles.button}
          onClick={() => navigate('/user/view-details')}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const styles = {
  userContainers: {
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
  },
};

export default UserDashboard;
