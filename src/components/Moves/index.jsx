import styled from "styled-components";

const Moves = ({ children }) => {
  return (
    <StyledMoves>
      <h3>Moves</h3>
      <Container>{children}</Container>
    </StyledMoves>
  );
};

const StyledMoves = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.radius.default};
  border: 4px solid ${({ theme }) => theme.colors.primaryColorLight};
  padding: 19px 12px 23px;
  grid-column: 1/3;
  overflow-y: scroll;
  height: 360px;

  > h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.negativeColor};
    background: ${({ theme }) => theme.colors.tertiaryColor};
    border: 3px solid ${({ theme }) => theme.colors.primaryColorLight};
    padding-block: 10px;
  }

  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.colors.primaryColor};
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiaryColor};
    border-radius: ${({ theme }) => theme.radius.default};
  }
`;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.8rem;
  gap: 2rem;
`;

export { Moves };
