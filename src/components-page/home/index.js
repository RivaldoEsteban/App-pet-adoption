import React from "react";
import "./styles.css";
import Footer from "../footer/footer";
import PetCategory from "./principal/petCategory";

export default function Home({ setPage, setPet }) {
  return (
    <section>
      <PetCategory setPage={setPage} setPet={setPet} />
      <Footer setPage={setPage} />
    </section>
  );
}
