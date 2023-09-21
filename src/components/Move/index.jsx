import styled from "styled-components";

const Move = ({ move }) => {
  return <StyledMove>{move}</StyledMove>;
};

const StyledMove = styled.li`
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.primaryColorLight};
  border-radius: ${({ theme }) => theme.radius.default};
  padding: 1.1rem 1.8rem;
`;

export { Move };
