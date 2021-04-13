import React from "react";
import "./styles.css";
import perro from "../../componet-img/images/cate-dog.png";
import gato from "../../componet-img/images/cate-cat.png";
import Footer from "../footer/footer";
import dogs from "../../data-pet/dog";
import cats from "../../data-pet/cat";

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

  return (
    <div className="pet-category">
      <h2 className="title">
        Adopta una adorable <br /> mascota
      </h2>
      <h3 className="title-categorias">Categorías de mascotas</h3>
      <div className="category">
        <div className="cat-dog" onClick={categoryDog} id="catPerros">
          <img src={perro} alt="" />
          <p>Perros</p>
        </div>
        <div className="cat-cat" onClick={categotyCat} id="catGatos">
          <img src={gato} alt="" />
          <p>Gatos</p>
        </div>
      </div>
      <div className="perros" id="cate-dog">
        {dogs.map((dog) => {
          return (
            <div className="pets" key={dog.key}>
              <img src={dog.image} alt="" />
              <p>{dog.name}</p>
              <p>{dog.raza}</p>
            </div>
          );
        })}
      </div>
      <div className="gatos" id="cate-cat">
        {cats.map((cat) => {
          return (
            <div className="pets" key={cat.key}>
              <img src={cat.image} alt="" />
              <p>{cat.name}</p>
              <p>{cat.raza}</p>
            </div>
          );
        })}
      </div>
      <div id="cate-cat"></div>
      <Footer />
    </div>
  );
}
