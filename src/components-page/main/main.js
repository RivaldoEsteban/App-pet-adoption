import React, { useState } from "react";
import Home from "../home/home";
import PetProfile from "../pet-profile/pet-profile";
import Chat from "../chat/chat";
import FavoritesPetPage from "../favorites/favorites";
import UserProfile from "../user/userProfile";
import MessageTray from "../message-tray/message-tray";
import Footer from "../footer/footer";
import "./main-styles.css";

function Main() {
  const [pet, setPet] = useState({});
  const [petFavorites, setPetFavorites] = useState([]);
  const [main, setMain] = useState("home");
  function page() {
    switch (main) {
      case "home":
        return <Home setMain={setMain} setPet={setPet} />;
      case "pet-profile":
        return (
          <PetProfile
            setMain={setMain}
            pet={pet}
            setPetFavorites={setPetFavorites}
            petFavorites={petFavorites}
          />
        );
      case "chat":
        return <Chat setMain={setMain} pet={pet} />;
      case "favorites":
        return (
          <FavoritesPetPage
            setMain={setMain}
            pet={pet}
            petFavorites={petFavorites}
          />
        );
      case "user":
        return <UserProfile setMain={setMain} />;
      case "message-tray":
        return <MessageTray setMain={setMain} />;
      default:
        console.log("error");
        break;
    }
  }

  return (
    <>
      {page()}
      <Footer setMain={setMain} />
    </>
  );
}

export default Main;
