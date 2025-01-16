import React from "react";

const styles = {
  header: {
    backgroundColor: "black",  
    color: "white", 
    padding: "15px 20px",  
    textAlign: "center", 
    fontSize: "24px", 
    fontWeight: "bold", 
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Gym Management System</h1>
    </header>
  );
};

export default Header;
