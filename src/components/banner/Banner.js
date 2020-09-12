import React, { useEffect, useState } from "react";
import axios from "../../commons/axios";
import request from "../../commons/requests";
import "./Banner.css";
export default function Banner() {
  const [movies, setmovies] = useState([]);
  const [requests] = useState(request);
  useEffect(() => {
    async function fetchData() {
      const fetchData = await axios.get(requests[0].URL);
      const size = Math.floor(
        Math.random() * (fetchData.data.results.length - 1)
      );
      setmovies(fetchData.data.results[size]);
      return fetchData;
    }
    fetchData();
  }, [requests]);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movies?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_tittle">
          {movies?.titile || movies?.name || movies?.orginal_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movies?.overview}</h1>
      </div>
    </header>
  );
}
