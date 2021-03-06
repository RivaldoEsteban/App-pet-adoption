import React from "react";
import "./favorites-styles.css";

function FavoritesPetPage({ setMain, petFavorites }) {
  function handlePetProfileClick() {
    setMain("pet-profile");
  }
  return (
    <section className="favorites-container">
      <h1 className="title-page">Mascotas Favoritas</h1>
      {petFavorites.map((pet) => {
        return (
          <section key={pet.key}>
            <img
              className="pet-img"
              src={pet.image}
              alt=""
              onClick={handlePetProfileClick}
            />
            <div className="container">
              <p className="pet-name">{pet.name}</p>
              <p className="pet-raza">{pet.raza}</p>
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default FavoritesPetPage;
