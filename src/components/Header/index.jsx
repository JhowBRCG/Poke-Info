import { styled } from "styled-components";
import { Title, ToggleButton, Form } from '../../components';
import { useContext } from "react";
import { ThemeState } from "../../contexts/themes";
import BgHeroDay from "../../assets/img/bg-hero-day.png";
import BgHeroNight from "../../assets/img/bg-hero-night.png";

const Header = () => {
  const { theme } = useContext(ThemeState);

  return (
    <StyledHeader theme={theme}>
      <ToggleButton />
      <Title />
      <Form />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 50vh;
  background-image: url(${({ theme }) => theme === "light" ? BgHeroDay : BgHeroNight});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  padding-top: 6rem;
  position: relative;

  @media screen and (max-width: 425px) {
    padding-top: 8rem;
    padding-inline: 1rem;
  }

  > button {
    top: 10px;
    right: 10px;
    position: absolute;
    display: block;

    @media screen and (max-width: 425px) {
      inset: 0;
      width: fit-content;
      height: fit-content;
      margin: 10px auto auto auto;
    }
  }

  h1 {
    text-align: center;
  }

  form {
    margin: 67px auto;
  }
`;

export { Header };
