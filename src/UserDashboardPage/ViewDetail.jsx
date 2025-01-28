import React, { useState, useEffect } from 'react';

const ViewDetails = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/members')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch members');
        return response.json();
      })
      .then((data) => setMembers(data))
      .catch((error) => console.error('Error fetching members:', error));
  }, []);

  const fetchMemberDetails = (id) => {
    fetch(`http://localhost:5000/api/members/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedMember(data))
      .catch((error) => console.error('Error fetching member details:', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">View Details</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">Member List</h2>
          <ul className="border rounded-lg p-2">
            {members.map((member) => (
              <li
                key={member.id}
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => fetchMemberDetails(member.id)}
              >
                {member.name}
              </li>
            ))}
          </ul>
        </div>

        {selectedMember && (
          <div className="col-span-2 border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Member Details</h2>
            <div>
              <p><strong>Name:</strong> {selectedMember.name}</p>
              <p><strong>Age:</strong> {selectedMember.age}</p>
              <p><strong>Gender:</strong> {selectedMember.gender}</p>
              <p><strong>Membership Plan:</strong> {selectedMember.plan}</p>
              <p><strong>Contact:</strong> {selectedMember.contact}</p>
              <p><strong>Joining Date:</strong> {selectedMember.joiningDate}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDetails;