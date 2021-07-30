import React, { useState } from "react";
import firebase from "../firebase/config";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import {IProps} from "./Home";
const Signup = ({ user}:IProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const changeEmail = (e: any): void => {
    setEmail(e.target.value);
  };

  const changePassword = (e: any): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email, password);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push("/login");
    } catch (error) {
      swal(`${error.message}`, "", "error");
    }
  };
  return (
    <div
      className="center container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "400px",
        border: "1px solid gray ",
        padding: "20px 30px",
        marginTop: "50px",
      }}
    >
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <button type="submit" className="btn blue" style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
