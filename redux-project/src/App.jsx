import React from "react";
import "./App.css";
import { fetchPhotos } from "./api/media.api";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-full">
      <button
        className="text-2xl"
        onClick={async () => {
          const data = await fetchPhotos("nature");
          console.log(data);
        }}
      >
        Get Phtos
      </button>
    </div>
  );
};

export default App;
