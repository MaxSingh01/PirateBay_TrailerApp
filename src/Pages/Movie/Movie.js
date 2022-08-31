import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleCard from "../../components/SingleCard/SingleCard";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setContent(data.results)
  };
  useEffect(() => {
    fetchMovies();// eslint-disable-next-line 
  }, [page]);
  return (
    <>
      <div className="page">
        <div className="pageTitle">Movie</div>
      </div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </>
  );
};

export default Movie;
