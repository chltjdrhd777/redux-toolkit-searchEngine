import React from "react";
import styled from "@emotion/styled/macro";
import { B } from "components";

class HomeCSS {
  Header = styled(B.BaseHeader)`
    background-color: black;
  `;

  Container = styled(B.BaseContainer)``;

  Media = styled.div`
    ${({ theme }) => theme.mediaQuery.phone} {
      ${this.Header} {
        background-color: blue;
      }
    }
  `;
}

export const H = new HomeCSS();
