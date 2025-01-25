// AdminDashboard.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();
  const email = location.state?.email;
  

  return (
    <div>
      <h3>Admin Dashboard</h3>
      {email ? <p>Welcome, {email}!</p> : <p>Welcome, Admin!</p>}
      <div style={styles.adminContainers}>
        <Link to="/add-member">
          <button>Add Member</button>
        </Link>
        <Link to="/update-delete-member">
          <button>Update/Delete Member</button>
        </Link>
        <Link to="/create-bills">
          <button>Create Bills</button>
        </Link>
        <Link to="/assign-fee-package">
          <button>Assign Fee Package</button>
        </Link>
        <Link to="/assign-notification">
          <button>Assign Notification</button>
        </Link>
        <Link to="/report-export">
          <button>Report Export</button>
        </Link>
        <Link to="/supplement-store">
          <button>Supplement Store</button>
        </Link>
        <Link to="/diet-details">
          <button>Diet Details</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  adminContainers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px',
  },
};

export default AdminDashboard;
