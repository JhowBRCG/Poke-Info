import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primaryColor};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: ${({ theme }) => theme.radius.default};
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 10px 22px;
`;

export { Button };
