import React, { useState, useEffect } from "react";
import { allData } from "../utilis/api";
import { CardsContainer } from "../components/CardsSection";
import Header from "../components/Header";
import { isWeb } from "../utilis/screenLayouts";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const { innerWidth: width } = window;
  console.log(movies)

  useEffect(() => {
    (async () => {
      const data = await allData();
      setMovies(data.allMovies);
    })();
  }, []);

  return (
    <>
      <Header />
      <CardsContainer data={movies} isWeb={isWeb(width)} />
    </>
  );
};

export default Home;
