import React from "react";
import cat from "./imagens/cat.png";
import "./index.css";

function Index() {
  return (
    <div className="cat">
      <img src={cat} alt="Gatinho" />
    </div>
  );
}

export default Index;
