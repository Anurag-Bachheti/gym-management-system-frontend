export const fetchUsers = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch("http://127.0.0.1:5000/api/users", requestOptions);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const result = await response.json();
    return result; 
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};