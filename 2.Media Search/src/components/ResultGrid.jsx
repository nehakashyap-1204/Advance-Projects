import React, { useEffect } from "react";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAPI";
import {
  setQuery,
  setActiveTabs,
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

function ResultGrid() {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);

          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          console.log(response);
          data = response.results.map((item) => ({
            id: item.id,
            title: item.title || "GIF",
            type: "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full flex justify-between flex-wrap gap-5 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ResultGrid;
