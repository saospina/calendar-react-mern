import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../thunks/authThunk";

export const Navbar = () => {

  const { name } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout())
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand ms-1">{name}</span>

      <button 
      className="btn btn-outline-danger me-1"
      onClick={handleLogout}
      >
        <i className="fas fa-sign-out-alt"></i>
        <span> Exit</span>
      </button>
    </div>
  );
};
