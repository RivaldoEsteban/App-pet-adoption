import React from "react";
import perfiles from "../../data-pet/petPerfil";
import "./perfil.css";

function PetPerfil({ id }) {
  return perfiles.map((perfil) => {
    return (
      <section className="pet-perfil" id={id}>
        <img className="image-pet" src={perfil.image} alt="" />
        <div className="info-pet-container">
          <div className="name-container">
            <div className="name-pet">
              <h3 className="name-mascota">{perfil.name}</h3>
              <img className="genero" src={perfil.genero} alt="" />
            </div>
            <img
              className="like"
              src="images/icon/icon-page/Union.svg"
              alt=""
            />
          </div>
          <div className="raza-edad">
            <div className="raza-pet">
              <img src="images/icon/icon-page/raza.png" alt="" />
              <p className="raza-edad-txt">{perfil.raza}</p>
            </div>
            <div className="edad-pet">
              <img src="images/icon/icon-page/dog-edad.png" alt="" />
              <p className="raza-edad-txt">{perfil.edad}</p>
            </div>
          </div>
          <div className="direccion">
            <img src="images/icon/icon-page/ubicacion.png" alt="" />
            <p>{perfil.direction}</p>
          </div>
          <div className="">
            <h4 className="sub-title">Personalidad</h4>
            <div className="personalidad-container">
              {perfil.personalities.map((personality) => {
                return (
                  <div className="personalidad">
                    <img src={personality.icon} alt="" />
                    <p>{personality.personality}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="historia">
            <h4>Historia de {perfil.name}</h4>
            <p>{perfil.history}</p>
          </div>
        </div>
        <div className="contacto-dueno">
          <img className="img-user" src={perfil.foto} alt="" />
          <div className="data-user">
            <h6>Publicado por</h6>
            <p>{perfil.dueno}</p>
          </div>
          <button className="btn-user">Contactar</button>
        </div>
      </section>
    );
  });
}

export default PetPerfil;
