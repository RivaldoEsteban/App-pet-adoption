import React from "react";
// import logo from "../../../public/images/app/logo.png";
import "./logo-styles.css";

export default function InicioPage({ id }) {
  return (
    <div className="inicio-logo" id={id}>
      <img
        className="logo"
        src="../../../public/images/app/logo.png"
        alt=""
        width="100px"
      />
    </div>
  );
}
