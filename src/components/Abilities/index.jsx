import styled from "styled-components";

const Abilities = ({ children }) => {
  return (
    <StyledAbilities>
      <h3>Abilities</h3>
      {children}
    </StyledAbilities>
  );
};

const StyledAbilities = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.radius.default};
  border: 4px solid ${({ theme }) => theme.colors.primaryColorLight};
  padding: 19px 12px 23px;
  overflow-y: scroll;
  min-height: 360px;

  > h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.negativeColor};
    background: ${({ theme }) => theme.colors.tertiaryColor};
    border: 3px solid ${({ theme }) => theme.colors.primaryColorLight};
    padding-block: 10px;
  }

  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.colors.primaryColor};
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiaryColor};
    border-radius: ${({ theme }) => theme.radius.default};
  }
`;

export { Abilities };
