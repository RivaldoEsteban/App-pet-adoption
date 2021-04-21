import React, { useState } from "react";
import "./App.css";
import StartApp from "./components-page/start-app/start-app";
import RunningApp from "./components-page/running-app/running app";
import Main from "./components-page/main/main";
// splash , onboarding, home, pet-profile, chat, favorites, user-profile

function App() {
  const [page, setPage] = useState("start");
  switch (page) {
    case "start":
      return <StartApp setPage={setPage} />;
    case "main":
      return <RunningApp />;
    default:
      console.log("error");
      break;
  }

  return null;
}

export default App;
