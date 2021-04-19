import React, { useState } from "react";
import "./pet-styles.css";

function PetProfile({ setPage, pet, setPetFavorites, petFavorites }) {
  const perfil = {
    personalities: [],
  };
  function handleContactClick() {
    setPage("chat");
  }
  function handleFavoritesClick() {
    // let newPetFavorites = petFavorites.slice();
    // newPetFavorites.push(pet);

    // newPetFavorites.push(pet);
    setPetFavorites([...petFavorites, pet]);
    setPage("favorites");
    // petFavorites.push(pet);
    // setPetFavorites(petFavorites);
  }
  function handleHomeClick() {
    setPage("home");
  }
  return (
    <section>
      <section className="pet-perfil" id="pet-profile" key={pet.key}>
        <img
          className="icon-left"
          src="images/icon/icon-page/left.svg"
          alt=""
          onClick={handleHomeClick}
        />
        <img className="image-pet" src={pet.image} alt="" />
        <div className="info-pet-container">
          <div className="name-container">
            <div className="name-pet">
              <h3 className="name-mascota">{pet.name}</h3>
              <img className="genero" src={pet.genero} alt="" />
            </div>
            <img
              className="like"
              src="images/icon/icon-page/Union.svg"
              alt=""
              onClick={handleFavoritesClick}
            />
          </div>
          <div className="raza-edad">
            <div className="raza-pet">
              <img src="images/icon/icon-page/raza.png" alt="" />
              <p className="raza-edad-txt">{pet.raza}</p>
            </div>
            <div className="edad-pet">
              <img src="images/icon/icon-page/dog-edad.png" alt="" />
              <p className="raza-edad-txt">{pet.edad}</p>
            </div>
          </div>
          <div className="direccion">
            <img src="images/icon/icon-page/ubicacion.png" alt="" />
            <p>{pet.direction}</p>
          </div>
          <div className="">
            <h4 className="sub-title">Personalidad</h4>
            <div className="personalidad-container">
              {pet.personalities.map((personality) => {
                return (
                  <div className="personalidad" key={personality.key}>
                    <img src={personality.icon} alt="" />
                    <p>{personality.personality}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="historia">
            <h4>Historia de {pet.name}</h4>
            <p>{pet.history}</p>
          </div>
        </div>
        <div className="contacto-dueno">
          <img className="img-user" src={pet.foto} alt="" />
          <div className="data-user">
            <h6>Publicado por</h6>
            <p>{pet.dueno}</p>
          </div>
          <button className="btn-user" onClick={handleContactClick}>
            Contactar
          </button>
        </div>
      </section>
    </section>
  );
}

export default PetProfile;
