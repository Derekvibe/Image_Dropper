import React from "react";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GallaeryImages() {
  const location = useLocation();
  const images = location.state?.images || [];

  const auth = getAuth();
  const history = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        history("/");
      })
      .catch((error) => {
        alert("Sign out error:", error);
      });
  };
  

  return (
    <div>
        <div className="flex m-4 gap-3 justify-between">
          <h1 className="text-2xl text-white text-center">Dragger</h1>
          <div className="bg-white text-black w-20 text-center p-1 rounded-sm hover:bg-blue-800 hover:text-white">
          <button onClick={handleClick}>signOut</button>
        </div>
      </div>

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