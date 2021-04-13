import React from "react";
import pets from "../../componet-img/images/esperando-adopción.png";
import Button from "../button/button";
import "./adoptar.css";

export default function AdoparEsbueno1() {
  return (
    <div className="mascota">
      <img src={pets} alt="" />
      <div className="txt">
        <h3>Encuentra tu amigo fiel</h3>
        <p className="txt-p">
          Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida.
          Si estás pensando en tener un nuevo integrante en tu familia; ¡estás
          en el lugar correcto!
        </p>
        <Button />
      </div>
    </div>
  );
}
