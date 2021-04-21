import React, { useState } from "react";
import "./onbording-styles.css";

export default function Onbording({ setPage }) {
  const [onbording, setOnbording] = useState({
    image: "images/app/esperando-adopcion.png",
    title: "Encuentra tu amigo fiel",
    texto:
      "Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estásen el lugar correcto!",
    key: "",
  });
  function changeData1() {
    setOnbording({
      image: "images/app/adoptado.png",
      title: "Crea una nueva historia",
      texto:
        "Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.",
      key: 1,
    });
  }
  function changeData2() {
    setOnbording({
      image: "images/app/esperando-adopcion.png",
      title: "Encuentra tu amigo fiel",
      texto:
        "Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estásen el lugar correcto!",
      key: 2,
    });
  }

  function hundleHomePage() {
    setPage("main");
  }
  return (
    <section className="mascota" key={onbording.key}>
      <div>
        <img src={onbording.image} alt="" />
        <div className="onbording-container">
          <h3>{onbording.title}</h3>
          <p className="onbording-p">{onbording.texto}</p>
        </div>
        <div className="arrows">
          <img
            src="images/icon/icon-page/arrowLeft.svg"
            alt=""
            onClick={changeData2}
          />
          <img
            src="images/icon/icon-page/arrowRight.svg"
            alt=""
            onClick={changeData1}
          />
        </div>
      </div>
      <button className="btn-siguiente" onClick={hundleHomePage}>
        Siguiente
      </button>
    </section>
  );
}
