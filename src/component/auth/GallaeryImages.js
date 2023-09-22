import React from "react";
import { useLocation } from "react-router-dom";

function GallaeryImages() {
  const location = useLocation();
  const images = location.state?.images || [];
  

  return (
    <div>
      <h1>Gallery Images</h1>
      <div className="imageContainer">
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallaeryImages;