import React from "react";
import MemeHeader from "./MemeHeader";
import MemeGenerator from "./MemeGenerator";

function Meme() {
  return (
    <div>
      <MemeHeader />
      <h1>Create a meme</h1>
      <MemeGenerator />
    </div>
  );
}

export default Meme;
