import { useState } from "react";

function ImageGallery({ links }) {
  const [imgLinks, setImageLinks] = useState(links);
  function handleClick(current) {
    setImageLinks((links) => {
      return links.filter((l) => l !== current);
    });
  }
  return (
    <div>
      {imgLinks.map((link) => (
        <div className="image" key={link}>
          <img src={link} alt="temp" />
          <button className="remove" onClick={() => handleClick(link)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
