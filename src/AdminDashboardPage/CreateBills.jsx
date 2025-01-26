import React, { useState } from 'react';
import axios from 'axios';


const CreateBill = () => {
  const [formData, setFormData] = useState({
    userId: '',
    membershipType: '',
    amount: '',
    issueDate: '',
    dueDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userId || !formData.membershipType || !formData.amount || !formData.issueDate || !formData.dueDate) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/bills/create', formData);
      alert('Bill created successfully!');
      setFormData({
        userId: '',
        membershipType: '',
        amount: '',
        issueDate: '',
        dueDate: '',
      });
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer ID:
        <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
      </label>
      <br />
      <label>
        Membership Type:
        <select name="membershipType" value={formData.membershipType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </label>
      <br />
      <label>
        Amount:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
      </label>
      <br />
      <label>
        Issue Date:
        <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
      </label>
      <button type="submit">Create Bill</button>
    </form>
  );
};

export default CreateBill;
