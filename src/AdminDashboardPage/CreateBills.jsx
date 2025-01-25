// import React, { useState } from 'react';

// const CreateBill = () => {
//   const [formData, setFormData] = useState({
//     userId: '',
//     membershipType: '',
//     amount: '',
//     issueDate: '',
//     dueDate: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/bills/create', formData);
//       alert('Bill created successfully!');
//     } catch (error) {
//       console.error('Error creating bill:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Customer ID:
//         <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
//       </label>
//       <label>
//         Membership Type:
//         <select name="membershipType" value={formData.membershipType} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Monthly">Monthly</option>
//           <option value="Quarterly">Quarterly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//       </label>
//       <label>
//         Amount:
//         <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
//       </label>
//       <label>
//         Issue Date:
//         <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
//       </label>
//       <label>
//         Due Date:
//         <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
//       </label>
//       <button type="submit">Create Bill</button>
//     </form>
//   );
// };

// export default CreateBill;
