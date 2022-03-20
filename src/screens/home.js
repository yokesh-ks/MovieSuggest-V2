import React, { useState, useEffect } from "react";
import { allData } from "../utilis/api";
import { CardsContainer } from "../components/CardsSection";
import Header from "../components/Header";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await allData();
      setMovies(data.allMovies);
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
