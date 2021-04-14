import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand ms-1">Sergio</span>

      <button className="btn btn-outline-danger me-1">
        <i className="fas fa-sign-out-alt"></i>
        <span> Exit</span>
      </button>
    </div>
  );
};
