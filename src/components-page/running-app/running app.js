import React, { useState } from "react";
import Main from "../main/main";
import Footer from "../footer/footer";
import "./runiing-styles.css";
import Home from "../home/home";

function RunningApp() {
  const [runningApp, setRunningApp] = useState(<Main />);
  return (
    <div className="page">
      {runningApp}
      <Footer />
    </div>
  );
}

export default RunningApp;
