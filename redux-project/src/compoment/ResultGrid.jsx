import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/media.api";
import {
  setQuery,
  setErrorState,
  setLoadingState,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTabs, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        if (!query) return;
        try {
          dispatch(setLoadingState());
          let data = [];
          if (activeTabs == "photos") {
            let response = await fetchPhotos(query);
            console.log(response);

            data = response.photos.map((item) => ({
              id: item.id,
              type: "photo",
              tittle: item.alt,
              thumbnail: item.src.medium,
              src: item.url,
              url: item.url,
            }));
          }
          if (activeTabs == "videos") {
            let response = await fetchVideos(query);
            console.log(response);

            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              tittle: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setErrorState(error));
        }
      };
      getData();
    },
    [query, activeTabs],
  );

  if (error) return <h1>error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full mt-10 px-4">
      {results.map((item, idx) => {
        return <ResultCard key={idx} item={item} />;
      })}
    </div>
  );
};

export default ResultGrid;
