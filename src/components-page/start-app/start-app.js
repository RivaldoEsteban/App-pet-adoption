import React, { useState, useEffect } from "react";
import Splash from "../splash/splash";
import Onbording from "../onbording/onbording";

function StartApp({ setPage }) {
  const [start, setStart] = useState("splash");
  switch (start) {
    case "splash":
      return <Splash setStart={setStart} />;
    case "onbording":
      return <Onbording setPage={setPage} />;
  }
  return null;
}

export default StartApp;
