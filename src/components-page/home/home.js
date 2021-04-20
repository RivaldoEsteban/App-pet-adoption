import React, { useState } from "react";
import dogs from "../../data-pet/dog-data";
import cats from "../../data-pet/cat-data";
import Footer from "../footer/footer";
import "./styles.css";

export default function Home({ setPage, setPet }) {
  const [tab, setTab] = useState("dog");
  function printCategoryDog() {
    setTab("dog");
  }
  function printCategoryCat() {
    setTab("cat");
  }

  function petProfile(pet) {
    setPage("pet-profile");
    setPet(pet);
  }
  return (
    <section className="pet-category" id="pet-category">
      <h2 className="title">
        Adopta una adorable <br /> mascota
      </h2>
      <h3 className="title-categorias">Categorías de mascotas</h3>
      <div className="category">
        <div
          className="cat-dog"
          onClick={() => {
            const categoryDog = document.getElementById("catPerros");
            const categoryCat = document.getElementById("catGatos");
            categoryCat.style.opacity = ".5";
            categoryDog.style.opacity = "1";
            printCategoryDog();
          }}
          id="catPerros"
        >
          <img src="images/app/cate-dog.png" alt="" />
          <p>Perros</p>
        </div>
        <div
          className="cat-cat"
          id="catGatos"
          onClick={() => {
            const categoryDog = document.getElementById("catPerros");
            const categoryCat = document.getElementById("catGatos");
            categoryCat.style.opacity = "1";
            categoryDog.style.opacity = ".5";
            printCategoryCat();
          }}
        >
          <img src="images/app/cate-cat.png" alt="" />
          <p>Gatos</p>
        </div>
      </div>
      <div className="pets" id="cate-dog">
        {tab === "dog"
          ? dogs.map((dog) => {
              return (
                <div
                  className="pet"
                  key={dog.key}
                  id={dog.id}
                  onClick={() => {
                    petProfile(dog);
                  }}
                >
                  <img className="image-pet" src={dog.image} alt="" />
                  <div className="container-name">
                    <p className="name">{dog.name}</p>
                    <p className="raza">{dog.raza}</p>
                  </div>
                </div>
              );
            })
          : tab === "cat"
          ? cats.map((cat) => {
              return (
                <div
                  className="pet"
                  key={cat.key}
                  id={cat.id}
                  onClick={() => {
                    petProfile(cat);
                  }}
                >
                  <img className="image-pet" src={cat.image} alt="" />
                  <div className="container-name">
                    <p className="name">{cat.name}</p>
                    <p className="raza">{cat.raza}</p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <Footer setPage={setPage} />
    </section>
  );
}
