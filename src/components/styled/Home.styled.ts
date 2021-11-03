import styled from "@emotion/styled/macro";
import { B } from "components/styled";

//# home

//# header
export const HomeHeader = styled(B.Header)`
  & input[type="text"] {
    width: 77%;
    padding: 0.8rem 0.5rem;
    background-color: #0d0c1d;
    border: 2px solid #7c2af1;
    outline: none;
    color: #f8f4f5;
    margin-top: 2rem;
    border-radius: 1rem;
    transition: border 0.5s;
    &::placeholder {
      color: white;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.pointColorCarrot};
    }
  }
`;

//# main
export const HomeMain = styled(B.Main)`
  & .search-list {
    .search-item {
      background-color: ${({ theme }) => theme.colors.lightblue};
      max-width: 50rem;
      padding: 1.5rem;
      border-radius: 2rem;
      margin: 0 auto;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.indigo};
      font-weight: bold;
      animation: fadeIn 0.5s ease-in-out;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

//@ media
export const Media = styled.div``;
