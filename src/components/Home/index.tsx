import React from "react";
import styled from "@emotion/styled/macro";
import { B } from "components";

//This part is like folder to control all segments
class HomeCSS {
  Header = styled(B.Header)`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.purple};
    z-index: 1000;
  `;

  Container = styled(B.Container)``;

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
      background-color: ${({ theme }) => theme.colors.purple};
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

  Media = styled.div`
    ${({ theme }) => theme.mediaQuery.phone} {
    }
  `;
}

export const H = new HomeCSS();
