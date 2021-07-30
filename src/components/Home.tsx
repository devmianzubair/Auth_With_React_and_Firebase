import React from "react";
import firebase from "../firebase/config";

export interface IProps {
  user: firebase.User | null | undefined;
}

const Home = ({ user }: IProps) => {
  console.log(user);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src="https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
