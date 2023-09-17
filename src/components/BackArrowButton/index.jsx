import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackArrowButton = () => {
  return (
    <Container>
      <Link to="/">
        <Icon
          icon="memory:arrow-left-bold"
          color="#e74c3c"
          style={{ fontSize: "5rem" }}
        />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  transition: all 200ms ease;

  &:hover {
    transform: translateX(-10px);
  }
`;

export { BackArrowButton };
