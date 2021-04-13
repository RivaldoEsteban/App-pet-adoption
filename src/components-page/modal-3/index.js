import React from "react";
import adoptado from "../../componet-img/images/Adoptado.png";
import Button from "../button/button";
import "./styles.css";

export default function AdoparEsbueno2() {
  return (
    <div className="adoptado">
      <img className="image-adopcion" src={adoptado} alt="" />
      <h3>Crea una nueva historia</h3>
      <p>
        Adoptar puede ser una de las experiencias más grandiosas de tu vida,
        donde compartirás bellos momentos con estos amiguitos fieles, tiernos y
        llenos de amor para regalar.
      </p>
      <Button />
    </div>
  );
}
