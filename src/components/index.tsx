import styled from "@emotion/styled/macro";

//commonly used component
export const B = {
  Header: styled.header``,
  Main: styled.main``,
  Footer: styled.footer``,
  Aside: styled.aside``,
  Container: styled.div`
    width: 100%;
    max-width: 100%;
    padding: 0 3rem;
  `,
  Section: styled.section``,
  Ul: styled.ul``,
  Nav: styled.nav``,
  Button: styled.button`
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem 3.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 10rem;
  `,
};
