import styled from "styled-components";
import { ThemeState } from "../../contexts/themes";
import { useContext } from "react";
import CardsDay from '../../assets/img/bg-cards-day.png'
import CardsNight from '../../assets/img/bg-cards-night.png'

const Pokedex = ({ children }) => {
  const { theme } = useContext(ThemeState);

  return <Section theme={theme}>{children}</Section>;
};

const Section = styled.section`
  background: linear-gradient(
      to right,
      rgba(85, 82, 82, 0.52),
      rgba(37, 3, 29, 0)
    ),
    url(${({ theme }) => theme === "light" ? CardsDay : CardsNight});
  background-position: center 40%;
  background-attachment: fixed;
  padding: 10rem 0;
  min-height: calc(50vh - 68px);

  button {
    display: block;
    margin: 5rem auto 0;
  }
`;

export { Pokedex };
