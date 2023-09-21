import { styled } from "styled-components";
import { Title } from "../Title";
import { ToggleButton } from "../ToggleButton";
import { Form } from "../Form";
import { useContext } from "react";
import BgHeroDay from "../../assets/img/bg-hero-day.png";
import { ThemeState } from "../../contexts/themes";
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

  > button {
    top: 10px;
    right: 10px;
    position: absolute;
    display: block;
    margin-left: auto;
  }

  h1 {
    text-align: center;
  }

  form {
    margin: 67px auto;
  }
`;

export { Header };
