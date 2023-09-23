import React from "react";
import './index.css';
import Home from "./component/auth/Home";
import ImageDrop from "./component/auth/ImageDrop";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ImageDrop" element={<ImageDrop/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
