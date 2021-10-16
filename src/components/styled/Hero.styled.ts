import styled from "@emotion/styled";
import heroBack from "assets/images/hero_background.jpg";
import { B } from ".";

export const Hero = styled(B.Section)`
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
