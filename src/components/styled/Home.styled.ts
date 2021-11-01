import styled from "@emotion/styled/macro";
import { B } from "components/styled";

//# home

//# header
export const HomeHeader = styled(B.Header)`
  & input[type="text"] {
    width: 77%;
    padding: 0.8rem 0.5rem;
    background-color: #0d0c1d;
    border: none;
    outline: 2px solid #7c2af1;
    color: #f8f4f5;
    margin-top: 2rem;
    border-radius: 1rem;
    &::placeholder {
      color: white;
    }
  }
`;

//# main
export const HomeMain = styled(B.Main)``;

//@ media
export const Media = styled.div``;
