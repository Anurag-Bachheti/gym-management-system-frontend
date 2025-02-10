import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewBillReceipt() {
  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBillReceipt = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Get stored token

        if (token) {
          const response = await axios.get('http://localhost:5000/api/bill-receipt', {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.status === 200) {
            setBill(response.data);
          } else {
            setError('Bill not created');
          }
        } else {
          setError('User not authenticated');
        }
      } catch (err) {
        setError('Error fetching bill receipt');
      } finally {
        setLoading(false);
      }
    };

    fetchBillReceipt();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Bill Receipt</h2>
      {bill ? (
        <div>
          <p>Membership Type: {bill.membershipType}</p>
          <p>Amount Paid: {bill.amountPaid}</p>
          <p>Due Date: {bill.dueDate}</p>
        </div>
      ) : (
        <p>Bill not created</p>
      )}
    </div>
  );
}

export default ViewBillReceipt;