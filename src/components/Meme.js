import React, { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [memesData, setMemesData] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemesData(data.data.memes);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  const handleClick = (e) => {
    const memesArray = memesData;

    let randomNo = Math.floor(Math.random() * memesArray.length);

    const url = memesArray[randomNo].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          type="text"
          placeholder="text top"
          className="form-input"
        />
        <input
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          type="text"
          placeholder="text bottom"
          className="form-input"
        />
        <button onClick={handleClick} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="memes" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
