import React, { useState, useEffect } from "react";

const UpdateDeleteMember = () => {
  const [members, setMembers] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [updatedMember, setUpdatedMember] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    membershipStatus: "active",
    membershipType: "Monthly",
    amountPaid: "no",
    nextPaymentDate: "",
    createdAt: "",
  });

  // Fetch members from the backend
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
      }
        const data = await response.json();

        // Remove duplicates and sort alphabetically by name
        const uniqueMembers = Array.from(
          new Map(data.map((member) => [member._id, member])).values()
        );
        const sortedMembers = uniqueMembers.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setMembers(sortedMembers);
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };

    fetchMembers();
  }, []);

  // Handle member selection
  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    setUpdatedMember({
      id: member._id, // Corrected to use _id
      name: member.name,
      email: member.email || "",
      phone: member.phone || "",
      membershipStatus: member.membershipStatus || "active",
      membershipType: member.membershipType || "Monthly",
      amountPaid: member.amountPaid || "no",
      nextPaymentDate: member.nextPaymentDate || "",
      createdAt: member.createdAt ? member.createdAt.split("T")[0] : "",
    });
  };

  // Handle input change for member details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMember((prev) => ({ ...prev, [name]: value }));
  };

  // Handle updating member
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${selectedMember._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMember),
        }
      );
      if (response.ok) {
        const updatedMembers = members.map((m) =>
          m._id === selectedMember._id ? { ...m, ...updatedMember } : m
        );
        setMembers(updatedMembers);
        setSelectedMember(null);
      } else {
        alert("Failed to update member.");
      }
    } catch (err) {
      console.error("Error updating member:", err);
    }
  };

  // Handle deleting a member
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${selectedMember._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Member deleted successfully!");
        setMembers(members.filter((m) => m._id !== selectedMember._id));
        setSelectedMember(null);
      } else {
        alert("Failed to delete member.");
      }
    } catch (err) {
      console.error("Error deleting member:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Update/Delete Member</h2>
      <div style={styles.flexContainer}>
        {/* Member List */}
        <div style={styles.memberList}>
          <h3>Members</h3>
          {members.map((member) => (
            <div
              key={member._id}
              style={{
                ...styles.memberItem,
                backgroundColor:
                  selectedMember && selectedMember._id === member._id
                    ? "#e0f7fa"
                    : "#f4f4f4",
              }}
              onClick={() => handleMemberSelect(member)}
            >
              {member.name}
            </div>
          ))}
        </div>

        {/* Member Details */}
        <div style={styles.memberDetails}>
          {selectedMember ? (
            <div>
              <h3>Update Member</h3>
              <form onSubmit={handleUpdate}>
                <div style={styles.formGroup}>
                  <label>ID</label>
                  <input type="text" name="id" value={updatedMember.id} disabled />
                </div>
                <div style={styles.formGroup}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={updatedMember.name}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={updatedMember.email}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={updatedMember.phone}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Membership Status</label>
                  <select
                    name="membershipStatus"
                    value={updatedMember.membershipStatus}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>Membership Type</label>
                  <select
                    name="membershipType"
                    value={updatedMember.membershipType}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>Amount Paid</label>
                  <select
                    name="amountPaid"
                    value={updatedMember.amountPaid}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>Next Payment Date</label>
                  <input
                    type="date"
                    name="nextPaymentDate"
                    value={updatedMember.nextPaymentDate}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Created At</label>
                  <input
                    type="date"
                    name="createdAt"
                    value={updatedMember.createdAt}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                  />
                </div>
                <div style={styles.buttonContainer}>
                  {!isEditable ? (
                    <button
                      type="button"
                      onClick={() => setIsEditable(true)}
                      style={styles.updateButton}
                    >
                      Edit
                    </button>
                  ) : (
                    <button type="submit" style={styles.updateButton}>
                      Save
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleDelete}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <p>Select a member to view and update their details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  flexContainer: {
    display: "flex",
    gap: "20px",
  },
  memberList: {
    width: "30%",
    borderRight: "1px solid #ddd",
    paddingRight: "10px",
  },
  memberDetails: {
    width: "70%",
    padding: "10px",
  },
  memberItem: {
    padding: "10px",
    margin: "5px 0",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  formGroup: {
    marginBottom: "15px",
  },
  updateButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    marginRight: "10px",
  },
  deleteButton: {
    padding: "10px 20px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
  },
};
export default UpdateDeleteMember;