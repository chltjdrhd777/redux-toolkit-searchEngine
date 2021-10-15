import React from "react";
import styled from "@emotion/styled/macro";
import { B } from "components";
import heroBack from "assets/images/hero_background.jpg";

// This part is like folder to control all segments
// The child component controlled by parent should be on the uppder statement in class comparing to their parent
// to use media query
class HomeCSS {
  //$ common
  ButtonGradient = styled(B.Button)`
    background-image: ${({ theme }) => theme.colors.gradient};
    display: inline-flex;
    align-items: center;

    .dots {
      font-size: 2.4rem;
      margin-left: 0.5rem;
      opacity: 0.75;
    }

    &:hover {
      background-image: ${({ theme }) => theme.colors.gradientAlt};
    }
  `;

  // container works for only spacing(padding)
  // main division(secions) should be inside container like Nav
  Container = styled(B.Container)``;

  //! header
  Nav = styled(B.Nav)<{ menuOpen?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo img {
      max-width: 80%;
    }

    .hamberger-menu {
      font-size: 2.6rem;
      color: ${({ theme }) => theme.colors.grayOne};
      position: relative;
      z-index: 1500;
      cursor: pointer;

      & .fa-times {
        display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
      }

      & .fa-bars {
        display: ${({ menuOpen }) => (menuOpen ? "none" : "block")};
      }
    }

    .nav-list {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      background-color: rgba(142, 68, 173, 1);
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 1400;
      opacity: ${({ menuOpen }) => (menuOpen ? 100 : 0)};
      transform: scale(${({ menuOpen }) => (menuOpen ? 1 : 0)});
      transition: opacity 0.5s;

      & .nav-item:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      & .nav-link {
        font-family: initial;
        display: block;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 1rem;
      }
    }
  `;

  Header = styled(B.Header)`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(142, 68, 173, 0.85);
    z-index: 1000;
  `;

  //@ main
  Hero = styled(B.Section)`
    width: 100%;
    height: 100vh;
    background: url(${heroBack}) no-repeat center/cover;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      background-color: ${({ theme }) => theme.colors.purple};
      opacity: 0.5;
      z-index: -1;
    }

    .main-heading {
      color: white;
      line-height: 1;
      text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);
      margin-bottom: 2.5rem;

      & .title {
        font-size: 4.8rem;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      & .subtitle {
        font-style: 3.6rem;
        font-weight: 300;
        font-family: "courgette", cursive;
      }
    }
  `;

  Main = styled(B.Main)``;

  Media = styled.div`
    ${({ theme }) => theme.mediaQuery.phone} {
    }
  `;
}

export const H = new HomeCSS();
