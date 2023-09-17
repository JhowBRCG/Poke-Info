import { styled } from "styled-components";

const Title = () => <StyledTitle>PokeInfo</StyledTitle>;

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export { Title };
