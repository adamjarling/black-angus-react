import React from "react";
import logo from "../images/black-angus-font-logo-white.png";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #000;
  padding: 2.5rem 0;
  margin-bottom: 5rem;
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const Logo = styled.img`
  max-width: 300px;
  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

const TopBar = () => (
  <Wrapper>
    <div className="container">
      <Logo src={logo} alt="Black Angus Logo" />
    </div>
  </Wrapper>
);

export default TopBar;
