import { styled } from "styled-components";
import { Title } from "../Title";
import { ToggleButton } from "../ToggleButton";
import { Form } from "../Form";

const Header = () => {
  return (
    <StyledHeader>
      <ToggleButton />
      <Title />
      <Form />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 50vh;
  background-image: url(${({ theme }) => theme.images.hero});
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
