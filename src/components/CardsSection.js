import React from "react";
import { MovieCard } from "./MovieCard";
import styled from "styled-components";
import { Layout } from "./Layout";

export const CardsContainer = (props) => {
  const { data } = props;
  return (
    <Layout> 
      <GridContainer>
        {data.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </GridContainer>
    </Layout>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 100px;
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
