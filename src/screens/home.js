import React, { useState, useEffect } from "react";
import { CardsContainer } from "../components/CardsSection";
import Header from "../components/Header";
import { isWeb } from "../utilis/screenLayouts";
import { allMovies } from "../api";
import { Layout } from "../components/Layout";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { innerWidth: width } = window;
  console.log(movies);

  useEffect(() => {
    (async () => {
      const data = await allMovies();
      setMovies(data.data);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <div>
          {loading ? (
            <div style={{ paddingTop: 300 }}>
              <h1>Loading...</h1>
            </div>
          ) : (
            <CardsContainer data={movies} isWeb={isWeb(width)} />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
