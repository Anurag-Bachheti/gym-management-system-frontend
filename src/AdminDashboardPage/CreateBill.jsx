import React, { useState, useEffect } from 'react';

const CreateBill = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    membershipType: '',
    amountPaid: '',
    dueDate: '',
  });

  const [loading, setLoading] = useState(false);

  // Fetch all members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) throw new Error('Error fetching members');
        const data = await response.json();
        setMembers(data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchMembers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   // Handle form submission
  const handleCreateBill = async (e) => {
    e.preventDefault();
     if (loading) return; // Prevent double submission
    if (!selectedMember || !formData.membershipType || !formData.amountPaid || !formData.dueDate) {
      alert('Please fill in all fields before submitting the form.');
      return;
    }
    const payload = {
      userId: selectedMember._id,
      membershipType: formData.membershipType,
      amountpaid: formData.amountPaid,
      dueDate: formData.dueDate,
    };
    console.log('Payload being sent:', payload); // Debugging line
  
    try {
      const response = await fetch('http://localhost:5000/api/bill/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to create bill');
      alert('Bill created successfully');
      setFormData({ membershipType: '', amountPaid: '', dueDate: '' }); // Reset form
      setSelectedMember(null); // Reset selected member
    } catch (error) {
      console.error('Error creating bill:', error);
      alert('Error creating bill. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Bill</h1>

      {/* List of Members */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Members</h2>
        <ul className="space-y-2">
          {members.map((member) => (
            <li
              key={member._id}
              className={`p-2 border rounded-md cursor-pointer ${
                selectedMember?._id === member._id ? 'bg-blue-100' : 'hover:bg-gray-200'
              }`}
              onClick={() => setSelectedMember((prev) => (prev?._id === member._id ? prev : member))}
            >
              {member.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Selected Member Details and Create Bill Form */}
      {selectedMember && (
        <div className="mt-4 p-4 border rounded-md">
          <h3 className="text-lg font-semibold">
            Selected Member: {selectedMember.name}
          </h3>
          <p>Email: {selectedMember.email}</p>
          <p>Phone: {selectedMember.phone}</p>

          {/* Create Bill Button */}
          <form onSubmit={handleCreateBill} className="mt-4 space-y-4">
            <div>
              <label className="block font-semibold">Membership Type</label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
                required
              >
                <option value="">Select</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold">Amount Paid</label>
              <input
                type="number"
                name="amountPaid"
                value={formData.amountPaid}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="block font-semibold">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
             {loading ? 'Creating...' : 'Create Bill'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateBill;