import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © Created by{" "}
        <Link to="https://github.com/JhowBRCG" target="no_blank">
          jhowbrcg
        </Link>
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerColorBg};
  text-align: center;
  padding-block: 2.6rem;

  p {
    color: ${({ theme }) => theme.colors.footerColor};

    > a {
      color: ${({ theme }) => theme.colors.negativeColor};
    }
  }

  @media screen and (max-width: 425px) {
    p,a {
      font-size: 1.4rem;
    }
  }
`;

export { Footer };
