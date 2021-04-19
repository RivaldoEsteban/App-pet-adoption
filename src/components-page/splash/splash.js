import React, { useEffect } from "react";
import "./logo-styles.css";

export default function Splash({ setPage }) {
  useEffect(() => {
    setTimeout(() => {
      setPage("onbording");
    }, 2000);
  }, []);

  return (
    <section>
      <section className="inicio-logo">
        <img className="logo" src="images/app/logo.png" alt="" width="200px" />
      </section>
    </section>
  );
}
