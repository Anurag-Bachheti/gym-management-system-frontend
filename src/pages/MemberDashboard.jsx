import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const MemberDashboard = () => {
  const navigate = useNavigate();
  const [,setBillReceipt] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  // }, []);
    const fetchBillReceipt = async () => {
      const token = localStorage.getItem('token'); // Get stored token

      if (token) {

        const response = await fetch('http://localhost:5000/api/bill-receipt', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.ok) {
          const data = await response.json();
          setBillReceipt(data);
        } else {
          console.error('Failed to fetch bill receipt');
        }
      }
    };

    fetchBillReceipt();
  }, []);

  return (
    <div style={styles.container}>
      <h1> Welcome, {userName}! </h1>
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
