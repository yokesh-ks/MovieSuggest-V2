import React, { useState, useEffect } from "react";
import { allMovies } from "../api";
import { CardsContainer } from "../components/CardsSection";
import Header from "../components/Header";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const moviesData = await allMovies();
      setMovies(moviesData);
    })();
  }, []);

  return (
    <>
      <Header />
      <CardsContainer data={movies} />
    </>
  );
};

export default Home;
