import React from "react";

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="text top" className="form-input" />
        <input type="text" placeholder="text bottom" className="form-input" />
        <button className="form-button">Generate Random meme image</button>
      </form>
    </main>
  );
};

export default Meme;
