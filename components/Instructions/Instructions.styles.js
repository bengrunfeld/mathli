import styled from "styled-components";

export const InstructionsBox = styled.div`
  background: ${({ theme }) => theme.colors.bgBlue};

  > p {
    padding: 1rem;
  }
`;

export const InstructionsText = styled.p`
  font-family: ${({ theme }) => theme.font.type1};
  font-size: 1.2rem;
  text-align: center;
`;
