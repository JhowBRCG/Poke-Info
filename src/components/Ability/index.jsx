import styled from "styled-components";

const Ability = ({ name, description }) => {
  return (
    <StyledAbility>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </StyledAbility>
  );
};

const StyledAbility = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primaryColorLight};
  padding: 1.4rem 2rem;
  margin-top: 1rem;
`;

const Name = styled.h4`
  color: ${({ theme }) => theme.colors.secondaryColorLight};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.primaryColorLight};
  font-size: 1.3rem;
  height: 50%;
`;

export { Ability };
