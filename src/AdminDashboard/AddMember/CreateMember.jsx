// src/components/AddMember/CreateMember.jsx
import React, { useState } from 'react';

const CreateMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipStatus: 'active',
    membershipType: 'Monthly',
    createdAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Member Data:', formData);
    alert('Member Created Successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      membershipStatus: 'active',
      membershipType: 'Monthly',
      createdAt: '',
    });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h3>Create Member</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <select
        name="membershipStatus"
        value={formData.membershipStatus}
        onChange={handleChange}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <select
        name="membershipType"
        value={formData.membershipType}
        onChange={handleChange}
      >
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
      <input
        type="date"
        name="createdAt"
        value={formData.createdAt}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Member</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default CreateMember;
