import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ImageDrop() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [term, setTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  const Images = [
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg",
    "https://img.freepik.com/free-photo/city-blue-sky_1417-1867.jpg",
    "https://img.freepik.com/free-photo/rough-metallic-surface-texture_23-2148953930.jpg",
    "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    "https://img.freepik.com/free-photo/fresh-leaf-reflects-vibrant-green-morning-dew-generated-by-ai_188544-15521.jpg",
    "https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg",
    "https://img.freepik.com/free-photo/young-beautiful-woman-with-flowers-near-face_186202-5624.jpg",
    "https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg",
    "https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg",
    "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg",
    "https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg",
    "https://img.freepik.com/free-photo/vertical-shot-pathway-middle-grassy-field-with-trees-cloudy-sky_181624-9081.jpg",
    "https://images.pexels.com/photos/5902149/pexels-photo-5902149.jpeg",
    "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg",
    "https://img.freepik.com/free-photo/excited-young-man-celebrating-success-making-fist-pump-move-shouting-happy-winning-rejoicing-white-background_176420-54717.jpg?",
    "https://img.freepik.com/free-photo/closeup-clear-water-sea-waves_181624-4031.jpg",
    "https://img.freepik.com/free-photo/splash-bargain-line-rain-signing_1134-965.jpg",
    "https://img.freepik.com/free-photo/3d-water-ai-generate_23-2150685444.jpg",
    "https://img.freepik.com/free-photo/makeup-brushes-with-whirling-pink-powder_23-2148208975.jpg",
    "https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg",
    "https://images.pexels.com/photos/18197687/pexels-photo-18197687/free-photo-of-beach-and-hill-on-sea-shore-in-black-and-white.jpeg",
    "https://images.pexels.com/photos/18391462/pexels-photo-18391462/free-photo-of-snow-flight-man-bird.jpeg",
    "https://img.freepik.com/free-photo/summer-background-sea-water_64049-160.jpg",
    "https://images.pexels.com/photos/17852406/pexels-photo-17852406/free-photo-of-people-walking-on-wooden-footpath-on-beach.jpeg",
    "https://images.pexels.com/photos/18069290/pexels-photo-18069290/free-photo-of-young-woman-in-dress-standing-in-water-on-sunset.jpeg",
    "https://images.pexels.com/photos/16278274/pexels-photo-16278274/free-photo-of-kittens-in-box.jpeg",
    "https://images.pexels.com/photos/16946246/pexels-photo-16946246/free-photo-of-food-art-apple-summer.jpeg",
    "https://images.pexels.com/photos/17117787/pexels-photo-17117787/free-photo-of-dulces-dulces.jpeg",
    "https://img.freepik.com/free-photo/dark-thunderstorm-danger-electricity-spooky-landscape-generative-ai_188544-8943.jpg",
    "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg",
    "https://img.freepik.com/free-photo/line-drive-asphalt-countryside-cloud_1417-281.jpg",
    "https://img.freepik.com/free-photo/forest-road_1112-1868.jpg",
  ];

  useState(() => {
    setFilteredImages(Images);
  }, []);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("Sign out error:", error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = Images.filter((imageUrl) =>
      imageUrl.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredImages(filtered);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("index");
    if (draggedIndex !== index) {
      const updatedImages = [...filteredImages];
      const draggedImage = updatedImages[draggedIndex];
      updatedImages[draggedIndex] = updatedImages[index];
      updatedImages[index] = draggedImage;
      setFilteredImages(updatedImages);
    }
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.transform = "scale(1)";
  };

  const handleDragEnter = (e) => {
    e.currentTarget.style.opacity = "0.7";
    e.currentTarget.style.transform = "scale(0.95)";
  };

  return (
    <>
      <div className="p-5">
        <div className="flex search_nav items-center justify-between">
          <form onSubmit={handleSearch} className="flex">
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              placeholder="Search Images"
              className="rounded-md border border-transparent focus:outline-none focus:ring-0 text-xm md:text-sm lg:text-base flex-grow"
            />
            <button
              type="submit"
              className="p-1 rounded-md hover:bg-black hover:text-white m-1 bg-white"
            >
              Search
            </button>
          </form>

          <div className="bg-white text-black w-20 text-center p-1 rounded-sm hover:bg-blue-800 hover:text-white">
            <button onClick={handleClick}>signOut</button>
          </div>
        </div>

        <div className="w-full block mt-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {filteredImages.map((imageUrl, i) => (
                <div
                  key={i}
                  draggable
                  onDragStart={(e) => handleDragStart(e, i)}
                  onDragOver={(e) => handleDragOver(e, i)}
                  onDragEnd={handleDragEnd}
                  onDragEnter={handleDragEnter}
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                >
                  <img src={imageUrl} alt={`Image ${i}`} />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
}

export default ImageDrop;
