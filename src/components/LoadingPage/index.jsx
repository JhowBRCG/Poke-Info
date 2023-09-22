import styled from "styled-components";

const LoadingPage = () => {
  return (
    <Container>
      <p>Loading....</p>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-content: center;
  background: ${({ theme }) => theme.colors.pokemonDetailsBg};
  min-height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;

  > p {
    color: ${({ theme }) => theme.colors.pokemonDetailsColor};
  }
`;

export { LoadingPage };
