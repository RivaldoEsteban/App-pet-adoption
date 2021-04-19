import React from "react";
import Footer from "../footer/footer";
import "./favorites-styles.css";

function FavoritesPetPage({ setPage, petFavorites }) {
  function handlePetProfileClick() {
    setPage("pet-profile");
  }
  return (
    <section>
      {petFavorites.map((pet) => {
        return (
          <section className="favorites-container">
            <h1>Mascotas Favoritas</h1>
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
      <Footer setPage={setPage} />
    </section>
  );
}

export default FavoritesPetPage;
