import { styled } from "styled-components";
import bgCard from "../../assets/img/bg-card.png";

const Card = ({ name, image, id }) => {
  return (
    <StyledCard>
      <Name>{name}</Name>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <Footer>#{id}</Footer>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 260px;
  height: 360px;
  padding: 19px 12px 23px;
  background: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.radius.default};
  border: 4px solid ${({ theme }) => theme.colors.primaryColorLight};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.negativeColor};
  background: ${({ theme }) => theme.colors.tertiaryColor};
  border: 3px solid ${({ theme }) => theme.colors.primaryColorLight};
  padding-block: 10px;
  text-align: center;
  text-transform: capitalize;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 176px;
  border: 3px solid ${({ theme }) => theme.colors.primaryColorLight};
  background: white;
  background-image: url(${bgCard});
  background-size: cover;
  background-position: center center;
  margin-top: 0.4rem;
  text-align: center;

  img {
    width: 169px;
  }
`;

const Footer = styled.div`
  margin-top: 0.4rem;
  width: 100%;
  height: 30%;
  text-align: center;
  line-height: 93.21px;
  background: ${({ theme }) => theme.colors.primaryColorLight};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 2rem;
`;

export { Card };
