import React from "react";

const Navbar = () => {
  return (
    <div style={{ background: "#4B0F8D", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>Dark Purple Dashboard</h1>
      <div>
        <span style={{ marginRight: "1rem" }}>Admin</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
