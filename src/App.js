import React, { useState } from "react";
import "./App.css";
import Splash from "./components-page/splash/splash";
import Onbording from "./components-page/onbording/onbording";
import Home from "./components-page/home/home";
import PetProfile from "./components-page/pet-profile/pet-profile";
import Chat from "./components-page/chat/chat";
import Footer from "./components-page/footer/footer";
import FavoritesPetPage from "./components-page/favorites/favorites";
import UserProfile from "./components-page/user/userProfile";
import MessageTray from "./components-page/message-tray/message-tray";

// splash , onboarding, home, pet-profile, chat, favorites, user-profile

function App() {
  const [page, setPage] = useState("splash");
  const [pet, setPet] = useState({});
  const [petFavorites, setPetFavorites] = useState([]);
  switch (page) {
    case "splash":
      return <Splash setPage={setPage} />;
    case "onbording":
      return <Onbording setPage={setPage} />;
    case "home":
      return <Home setPage={setPage} setPet={setPet} />;
    case "pet-profile":
      return (
        <PetProfile
          setPage={setPage}
          pet={pet}
          setPetFavorites={setPetFavorites}
          petFavorites={petFavorites}
        />
      );
    case "chat":
      return <Chat setPage={setPage} pet={pet} />;
    case "footer":
      return <Footer setPage={setPage} />;
    case "favorites":
      return (
        <FavoritesPetPage
          setPage={setPage}
          pet={pet}
          petFavorites={petFavorites}
        />
      );
    case "user":
      return <UserProfile setPage={setPage} />;
    case "message-tray":
      return <MessageTray setPage={setPage} />;
    default:
      console.log("error");
      break;
  }
  return null;
}

export default App;
