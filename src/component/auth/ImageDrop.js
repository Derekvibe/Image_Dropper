import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "./ImageDrop.css";

const ImageDrop = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const auth = getAuth();
  const history = useNavigate();

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;

    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        newImages.push({
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        });
      }
    }

    setImages((prevImages) => [...prevImages, ...newImages]);
  }

  function deleteImage(index) {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;

    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        newImages.push({
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        });
      }
    }

    setImages((prevImages) => [...prevImages, ...newImages]);
  }

  function uploadImages() {
    history("/GallaeryImages");
  }
  
  

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
    <>
      <div className="flex m-4 gap-3 justify-between">
        <h1 className="text-2xl text-white text-center">Dragger</h1>
        <div className="bg-white text-black w-20 text-center p-1 rounded-sm hover:bg-blue-800 hover:text-white">
          <button onClick={handleClick}>signOut</button>
        </div>
      </div>

      <div className="card p-3 drop-shadow-md rounded-md overflow-hidden">
        <div className="text-center">
          <p className="text-blue-500 font-bold">Drag & Drop Image uploading</p>
        </div>
        <div
          className={`DragBox h-40 rounded-md border-dotted border-blue-400
          border-2 bg-white flex justify-center items-center select-none mt-3 w-11/12 ml-10 h-80 ${isDragging ? 'dragging' : ''}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
            <span className="text-blue-500 ml-1 cursor-pointer transition hover:opacity-60">
              Drop Images Here
            </span>
          ) : (
            <>
              Drag & Drop Image here or{" "}
              <span
                className="text-blue-500 ml-1 cursor-pointer transition hover:opacity-60"
                role="button"
                onClick={selectFiles}
              >
                Browse
              </span>
            </>
          )}

          <input
            name="file"
            type="file"
            className="files"
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
        <div className="imageContainer w-full h-auto flex justify-start items-start flex-wrap max-h-52 overflow-y-auto mt-3">
          {images.map((image, index) => (
            <div
              className="image grid grid-row-5 w-36 mt-2 pr-3 mb-3 relative"
              key={index}
            >
              <span
                className="delete text-white absolute top-1 right-2 cursor-pointer text-base"
                onClick={() => deleteImage(index)}
              >
                &times;
              </span>
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full rounded"
              />
            </div>
          ))}
        </div>

          <button
            type="button"
            className="text-white outline-0 rounded-md border-0 font-semibold 
              py-2 px-3 w-11/12 ml-10 bg-blue-500 z-50"
            onClick={uploadImages}
          >
            Upload
          </button>
      </div>
    </>
  );
};

export default ImageDrop;
