import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/SplashScreen.css";

const SplashScreen = () => {
  const history = useHistory();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade
      setTimeout(() => {
        history.push("/home"); // redirect after fade
      }, 800); // must match CSS transition duration
    }, 2000); // stay visible for 2s

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="splash-logo">NETFLIX</h1>
    </div>
  );
};

export default SplashScreen;
