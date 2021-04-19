import React from "react";
import "./chat-styles.css";
// import perfiles from "../../data-pet/petPerfil";
import Footer from "../footer/footer";

function Chat({ setPage, pet }) {
  function retroceder() {
    setPage("home");
  }
  return (
    <section>
      <section className="chat-message">
        <header className="chat-header">
          <svg
            onClick={retroceder}
            className="arrow-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="contacto">
            <img className="image-dueño" src={pet.foto} alt="" />
            <p className="name-dueño">{pet.dueno}</p>
          </div>
        </header>
        <main></main>
      </section>
      <Footer setPage={setPage} />
    </section>
  );
}

export default Chat;