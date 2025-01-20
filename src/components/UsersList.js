import React, { useEffect, useState } from 'react';
import { fetchUsers } from "../services/userService";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await fetchUsers();  // Use the function from the service
        setUsers(result);  // Set the result in state
      } catch (error) {
        setError("Failed to fetch users");  // Set an error if something goes wrong
      }
    };
    getUsers();  // Invoke the function to fetch users
  }, []);  // Empty array ensures this runs once when the component mounts

  if (error) {
    return <div>Error: {error}</div>;  // Show error if any
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
      {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>{user.name}</li>  // Assuming user object has 'id' and 'name' fields
          ))
        ) : (
          <li>No users found</li>  // Handle empty list case
        )}
      </ul>
    </div>
  );
};

export default UsersList;