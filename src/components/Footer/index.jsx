import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by Jhowbrcg</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerColorBg};
  text-align: center;
  padding-block: 2.6rem;

  p {
    color: ${({ theme }) => theme.colors.footerColor};
  }
`;

export { Footer };
