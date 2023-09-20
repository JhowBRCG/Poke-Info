import styled from "styled-components";

const Moves = () => {
  return (
    <StyledMoves>
      <h3>Moves</h3>
      <Container>
        <Move>dash</Move>
        <Move>dash</Move>
        <Move>dash</Move>
        <Move>dsadsadsadsadsa</Move>
        <Move>dsadsadsads</Move>
      </Container>
    </StyledMoves>
  );
};

const StyledMoves = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.radius.default};
  border: 4px solid ${({ theme }) => theme.colors.primaryColorLight};
  padding: 19px 12px 23px;
  grid-column: 1/3;
  /* overflow-y: scroll; */
  min-height: 360px;

  > h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.negativeColor};
    background: ${({ theme }) => theme.colors.tertiaryColor};
    border: 3px solid ${({ theme }) => theme.colors.primaryColorLight};
    padding-block: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.8rem;
  gap: 2rem;
`;

const Move = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.primaryColorLight};
  border-radius: ${({ theme }) => theme.radius.default};
  padding: 1.1rem 1.8rem;
`;
export { Moves };
