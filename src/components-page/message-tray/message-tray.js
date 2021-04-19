import React from "react";
import Footer from "../footer/footer";
import "./message-style.css";

function MessageTray({ setPage }) {
  return (
    <section>
      <section className="message-tray">
        <h1>Mensajes</h1>
      </section>
      <Footer setPage={setPage} />
    </section>
  );
}
export default MessageTray;
