import React from "react";
import { Link } from "react-router-dom";
import { IProps } from "./Home";
import firebase from "../firebase/config";
import { useHistory } from "react-router-dom";

const NavBar = ({ user }: IProps) => {
  const history = useHistory();

  const handleSignOut = () => {
    firebase.auth().signOut();
    history.push("/login");
  };

  return (
    <>
      <nav>
        <div
          className="nav-wrapper blue "
          style={{ paddingLeft: "25px", paddingRight: "30px" }}
        >
          <Link to="/" className="brand-logo left">
            Solution Club
          </Link>
          <ul id="nav-mobile" className="right">
            {user ? (
              <li>
                <button className="btn red" onClick={handleSignOut}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
