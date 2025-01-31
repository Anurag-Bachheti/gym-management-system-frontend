import React, { useState } from 'react';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password:'',
    membershipStatus: 'active',
    amountPaid: 'no', // Default to 'no'
    nextPaymentDate: '', // New field
    membershipType: 'Monthly',
    createdAt: new Date().toISOString().split('T')[0], // Default to today's date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("On change called", formData);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          alert('Member added successfully');
          setFormData({
            name: '',
            email: '',
            phone: '',
            password:'',
            membershipStatus: 'active',
            membershipType: 'Monthly',
            amountPaid: 'no',
            nextPaymentDate: '',
            createdAt: new Date().toISOString().split('T')[0],
          });
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
          alert('Failed to add member: ' + (errorData.error || 'Unknown error'));
        }
      } catch (err) {
        console.error(err);
        alert('Error adding member');
      }
    }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label> {/* Added password input */}
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Membership Status:</label>
          <select
            name="membershipStatus"
            value={formData.membershipStatus}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label>Membership Type:</label>
          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
          >
           <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half-Yearly">Half-Yearly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label>Amount Paid:</label>
          <select
            name="amountPaid"
            value={formData.amountPaid}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label>Next Payment Date:</label>
          <input type="date" name="nextPaymentDate" value={formData.nextPaymentDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Created At:</label>
          <input
            type="date"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;