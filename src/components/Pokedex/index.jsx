import styled from "styled-components";

const Pokedex = ({ children }) => {
  return <Section>{children}</Section>;
};

const Section = styled.section`
  background: linear-gradient(
      to right,
      rgba(85, 82, 82, 0.52),
      rgba(37, 3, 29, 0)
    ),
    url(${({ theme }) => theme.images.pokedex});
  background-position: center center;
  padding: 10rem 0 5rem;

  button {
    display: block;
    margin: 5rem auto 0;
  }
`;

export { Pokedex };
