import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import media from "css-in-js-media";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Die Bowen-Technik", href: "#bowen-technik" },
    { name: "Preise & Ablauf", href: "#prices" },
    { name: "Über mich", href: "/About", id: "about" },
    { name: "Kontakt", href: "#contact" },
  ];
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <NavContainer>
      <StyledImage src="lotus.svg" alt="lotus" width={75} height={75} />
      <Burger onClick={handleToggle}>
        <div />
        <div />
        <div />
      </Burger>
      <StyledContainer isOpen={isOpen}>
        {links.map((link) => (
          <StyledList key={link.name}>
            <StyledLink href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </StyledLink>
          </StyledList>
        ))}
      </StyledContainer>
    </NavContainer>
  );
}
const NavContainer = styled.nav`
  display: flex;
  background-color: #ede6d8;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 100px);
  position: fixed;
  padding: 10px 50px;
  z-index: 1;
  p: 100px;
  }
`;
const Burger = styled.div`
  width: 0.5rem;
  margin-top: 0.5rem;
  height: 1.5rem;

  display: none;

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 10px; /* Adjust this value to move the burger button up or down */
    right: 40px;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: white;

    transition: all 0.3s linear;
  }
`;

const StyledContainer = styled.ul`
  display: flex;

  gap: 30px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  ${media("<=phone")} {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    gap: 0;
    width: 100%;
    background-color: #cad4c9;
    padding: 10px 0;
  }
`;

const StyledList = styled.li`
  font-size: 1.1rem;
  font-weight: 200;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  display: inline;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
  ${media("<=phone")} {
    &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;
const StyledImage = styled(Image)`
  ${media("<=phone")} {
    position: relative;
    left: 36%;
  }
`;
