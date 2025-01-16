import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Home() {
  return (
    <>
      <Login />
      <footer style={styles.footer}>
        <Link to="/register">
          <button style={styles.newUserButton}>New User</button>
        </Link>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  newUserButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Home;
