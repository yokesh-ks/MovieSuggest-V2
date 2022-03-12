import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 330px) {
    max-width: 300px;
  }
  @media (min-width: 375px) {
    max-width: 327px;
  }
  @media (min-width: 576px) {
    max-width: 440px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 952px;
  }
  @media (min-width: 1200px) {
    max-width: 1080px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;