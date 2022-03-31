import React, { useState } from "react";
import styled from "styled-components";

const StarRating = (props) => {
  const { rating = 0 } = props;
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <StarContainer>
      {maxRating.map((item) => {
        return (
          <Star
            fillColor={
              item <= rating / 2 ? "#FFBA38" : "rgba(173, 186, 198, 0.7)"
            }
          />
        );
      })}
    </StarContainer>
  );
};

const Star = ({ fillColor }) => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 10.5L2.8855 12.6631L3.6713 8.08156L0.342604 4.83688L4.94275 4.16844L7 0L9.05725 4.16844L13.6574 4.83688L10.3287 8.08156L11.1145 12.6631L7 10.5Z"
      fill={fillColor}
    />
  </svg>
);

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-top: 8px;
`;

export default StarRating;
