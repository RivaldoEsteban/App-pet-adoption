import React from "react";
import logo from "../../componet-img/images/logo.png";
import "./logo-styles.css";

export default function InicioPage({ id }) {
  return (
    <div className="inicio-logo" id={id}>
      <img className="logo" src={logo} alt="" width="100px" />
    </div>
  );
}
