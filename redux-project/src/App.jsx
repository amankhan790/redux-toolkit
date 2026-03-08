import React from "react";
import "./App.css";
import { fetchPhotos, fetchVideos } from "./api/media.api";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-full">
      <button
        className="text-2xl bg-green-500 p-2 rounded-lg m-4"
        onClick={async () => {
          const data = await fetchPhotos("nature");
          console.log(data.photos);
        }}
      >
        Get Phtos
      </button>
      <button
        className="text-2xl bg-green-500 p-2 rounded-lg m-4"
        onClick={async () => {
          const data = await fetchVideos("nature");
          console.log(data.videos);
        }}
      >
        Get videos
      </button>
    </div>
  );
};

export default App;
