import React from "react";
import styled from "styled-components";
import { Layout } from "./Layout";

function Header() {
  return (
    <Navbar>
      <Layout>
        <NavContent>MovieSuggest</NavContent>
      </Layout>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.div`
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0;
  box-shadow: -2px -2px 4px rgb(255 255 255 / 7%), 2px 2px 6px rgb(0 0 0 / 80%);
  background: #091921;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  color: #d60010;
  height: 100%;
  width: 100%;
`;
