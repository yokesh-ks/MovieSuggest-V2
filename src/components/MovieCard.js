import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

export const MovieCard = (props) => {
  const { movie, isWeb } = props;
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <NewsCard key={movie.id} isWeb={isWeb}>
      <ImageBackground
        isWeb={isWeb}
        img={`${base_url}${isWeb ? movie.backdrop_path : movie.poster_path}`}
      />
      <CardContent>
        <CardTitle>{movie.title}</CardTitle>
        <CardDesc>{movie.overview}</CardDesc>
        <AuthorDetail>
          Released - <span> {movie.release_date}</span>
        </AuthorDetail>
        <StarRating rating={movie.vote_average} />
      </CardContent>
    </NewsCard>
  );
};

const NewsCard = styled.div`
  border-radius: 1rem;
  box-shadow: -2px -2px 4px rgb(255 255 255 / 7%), 2px 2px 6px rgb(0 0 0 / 80%);
  display: flex;
  flex-direction: ${(props) => (props.isWeb ? "column" : "row")};
`;

const CardContent = styled.div`
  padding: 0 12px 20px 12px;
  width: 100%;
`;

const CardTitle = styled.h2`
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #d60010;
  letter-spacing: 0.5px;
`;

const CardDesc = styled.p`
  margin-top: 8px;
  line-height: 1.5;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #fff;
  letter-spacing: 0.5px;
`;

const AuthorDetail = styled.p`
  line-height: 25px;
  margin-top: 8px;
  font-size: 14px;
  color: #6f6f6f;
`;

const ImageBackground = styled.div`
  background-image: url(${(props) => props.img});
  width: ${(props) => (props.isWeb ? "100%" : "120px")};
  height: ${(props) => (props.isWeb ? "200px" : "100%")};
  background-size: cover;
  background-position: center;
  border-radius: 1rem 1rem 0 0;
`;
