import styled from "@emotion/styled/macro";
import { B } from ".";

export const ButtonGradient = styled(B.Button)`
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
