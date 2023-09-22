import React from "react";
import './index.css';
import Home from "./component/auth/Home";
import ImageDrop from "./component/auth/ImageDrop";
import GallaeryImages from "./component/auth/GallaeryImages";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ImageDrop" element={<ImageDrop/>} />
          <Route path="/GallaeryImages" element={<GallaeryImages/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
