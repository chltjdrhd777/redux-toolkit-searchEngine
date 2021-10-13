import React from "react";
import styled from "@emotion/styled/macro";
import { B } from "components";

//This part is like folder to control all segments
class HomeCSS {
  Header = styled(B.Header)``;

  Media = styled.div`
    ${({ theme }) => theme.mediaQuery.phone} {
    }
  `;
}

export const H = new HomeCSS();
