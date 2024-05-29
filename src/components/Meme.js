import React from "react";
import html2canvas from "html2canvas";

export default function Meme() {
  //const [memeImage, setMemeImage] = React.useState();

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data=> setAllMeme(data.data.memes))
  },[])

  console.log(allMeme)

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));

    console.log(meme);
  }

  const downloadMeme = () => {
    const memeElement = document.querySelector(".meme"); // Select the meme element

    html2canvas(memeElement, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  function handleChange(event){
    const{name,value}=event.target
    setMeme(prevMeme=> ({
      ...prevMeme,
      [name]:value
    }))

  }


  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button type="submit" className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <div className="meme-image-container">
          <img
            src={meme.randomImage}
            alt=""
            className="meme-image"
            crossOrigin="anonymous"
          />
        </div>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText} </h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="download-button" onClick={downloadMeme}>
          Download Image
        </button>
      </div>
    </main>
  );
}
