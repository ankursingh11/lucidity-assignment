import React from "react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleAdmin } from "../utils/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleAdmin());
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <span className="navbar-item font-bold text-xl first-letter">
            Inventory Management
          </span>
        </div>
        <div className="navbar-end mx-6">
          <span>admin</span>
          <input
            type="checkbox"
            className="switch switch-success mx-3"
            onClick={handleToggle}
          />
          <span>user</span>
        </div>
        <FontAwesomeIcon icon={faRightFromBracket} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
