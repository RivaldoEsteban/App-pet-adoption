import React, { useEffect } from "react";
import "./styles.css";
import Footer from "../footer/footer";
import dogs from "../../data-pet/dog";
import cats from "../../data-pet/cat";
import PetPerfil from "../modal-5/perfil";

export default function PetCategory() {
  function categoryDog() {
    const catDog = document.getElementById("cate-dog");
    const perros = document.getElementById("catPerros");
    const gatos = document.getElementById("catGatos");
    const catCat = document.getElementById("cate-cat");
    // catCat.classList.add("hidden");
    catDog.style.display = "flex";
    gatos.style.opacity = ".5";
    perros.style.opacity = "1";
    catCat.style.display = "none";
  }

  function categotyCat() {
    const perros = document.getElementById("catPerros");
    const gatos = document.getElementById("catGatos");
    const catDog = document.getElementById("cate-dog");
    const catCat = document.getElementById("cate-cat");
    perros.style.opacity = ".5";
    gatos.style.opacity = "1";
    catCat.style.display = "flex";
    catDog.style.display = "none";
  }

  useEffect(() => {
    const chester = document.getElementById("chester");
    // console.log(petCategory);
    // console.log(petPerfil);
    chester.addEventListener("click", chesterInfo);
    function chesterInfo() {
      const petCategory = document.getElementById("pet-category");
      const petPerfil = document.getElementById("petPerfil");
      petCategory.style.display = "none";
      petPerfil.style.display = "block";
    }
  });

  return (
    <section>
      <div className="pet-category" id="pet-category">
        <h2 className="title">
          Adopta una adorable <br /> mascota
        </h2>
        <h3 className="title-categorias">Categorías de mascotas</h3>
        <div className="category">
          <div className="cat-dog" onClick={categoryDog} id="catPerros">
            <img src={cats[0].gato} alt="" />
            <p>Perros</p>
          </div>
          <div className="cat-cat" onClick={categotyCat} id="catGatos">
            <img src={cats[0].perro} alt="" />
            <p>Gatos</p>
          </div>
        </div>
        <div className="perros" id="cate-dog">
          {dogs.map((dog) => {
            return (
              <div className="pets" key={dog.key} id={dog.id}>
                <img className="image-pet" src={dog.image} alt="" />
                <div className="container-name">
                  <p className="name">{dog.name}</p>
                  <p className="raza">{dog.raza}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="gatos" id="cate-cat">
          {cats.map((cat) => {
            return (
              <div className="pets" key={cat.key}>
                <img className="image-pet" src={cat.image} alt="" />
                <div className="container-name">
                  <p className="name">{cat.name}</p>
                  <p className="raza">{cat.raza}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div id="cate-cat"></div>
        <Footer id="footer" />
      </div>
      <PetPerfil id="petPerfil" />
    </section>
  );
}
