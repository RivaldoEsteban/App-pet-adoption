import React, { useState } from "react";
import "./user.css";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    latname: "",
    email: "",
    image: "",
  });

  function saveData(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file = formData.get("user-img");
    const image = URL.createObjectURL(file);
    const name = event.target.querySelector("#input-name").value;
    const lastName = event.target.querySelector("#input-lastname").value;
    const email = event.target.querySelector("#input-email").value;
    setUser({
      name: name,
      lastName: lastName,
      email: email,
      image: image,
    });
  }
  return (
    <section>
      <section className="user-profile">
        <h2 className="title-page">Perfil</h2>
        <div className="profile-container">
          {user.image ? (
            <img className="image-profile" src={user.image} alt="" />
          ) : (
            ""
          )}
          <p className="user-name">
            {user.name} {user.lastName}
          </p>
        </div>
        <form action="" onSubmit={saveData} id="form">
          <div className="form-container">
            <label className="label">Nombre</label>
            <input
              className="input"
              type="text"
              name="user-name"
              id="input-name"
            />
          </div>
          <div className="form-container">
            <label className="label">Apellido</label>
            <input
              className="input"
              type="text"
              name="user-lastname"
              id="input-lastname"
            />
          </div>
          <div className="form-container">
            <label className="label">Correo</label>
            <input
              className="input"
              type="email"
              name="user-email"
              id="input-email"
            />
          </div>
          <div className="form-container">
            <label className="label">Foto</label>
            <input
              className="input file"
              type="file"
              name="user-img"
              id="photo"
            />
            {user.image ? (
              <img className="input-file" src={user.image} alt="" />
            ) : (
              ""
            )}
          </div>
          <button className="btn">Guardar</button>
        </form>
      </section>
    </section>
  );
}

export default UserProfile;
