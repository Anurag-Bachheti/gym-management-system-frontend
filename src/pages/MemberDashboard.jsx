import React from 'react';
import { Outlet ,useNavigate } from 'react-router-dom';

const MemberDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Member Dashboard</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate('/member-dashboard/view/billnotification')}>
          View Bill Notifications
        </button>
        <button style={styles.button} onClick={() => navigate('/member-dashboard/view/billreceipt')}>
          View Bill Receipts
        </button>
      </div>
      <Outlet /> {/* This renders the child routes */}
    </div>
  );
};

const styles = {
  memberContainers: {
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

export default MemberDashboard;
