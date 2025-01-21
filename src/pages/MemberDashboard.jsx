import React from 'react';

const MemberDashboard = () => {
  return (
    <div>
      <h3>Member Dashboard</h3>
      <div style={styles.memberContainers}>
        <button style={styles.button}>View Bill Receipts</button>
        <button style={styles.button}>View Bill Notification</button>
        <button style={styles.button}>Schedule Appointments</button>
      </div>
    </div>
  );
};

const styles = {
  memberContainers: {
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

export default MemberDashboard;
