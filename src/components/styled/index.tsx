import styled from "@emotion/styled/macro";

//commonly used component
export const B = {
  Container: styled.div`
    width: 100%;
    max-width: 100%;
    padding: 3rem;
  `,
  Header: styled.header``,
  Main: styled.main``,
  Footer: styled.footer``,
  Aside: styled.aside``,
  Section: styled.section``,
  Ul: styled.ul``,
  Nav: styled.nav``,
  Button: styled.button`
    /* base */
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem 3.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 10rem;

    /* reuse */
    &.gradient {
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
    }

    &.form-btn {
      margin-top: 2.5rem;
      cursor: pointer;
    }

    &.btn-purple {
      background-color: ${({ theme }) => theme.colors.purple};
      &:hover {
        background-color: ${({ theme }) => theme.colors.pointColorYello};
        color: ${({ theme }) => theme.colors.indigo};
      }
    }
  `,
  Form: styled.form``,
};
