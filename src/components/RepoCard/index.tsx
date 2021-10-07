import React from "react";

import {
  Container,
  Content,
  Footer,
  Icon,
  Info,
  InfoText,
  Row,
  Subtitle,
  Title,
} from "./styles";

interface IProps {
  title: string;
  description: string;
  stars: number;
  forks: number;
  lang: string;
}

const RepoCard: React.FC<IProps> = ({ title, description, stars, forks, lang }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </Content>
      <Footer>
        <Subtitle>{lang}</Subtitle>
        <Row>
          <Info>
            <Icon name="star" />
            <InfoText>{stars}</InfoText>
          </Info>
          <Info>
            <Icon name="fork" />
            <InfoText>{forks}</InfoText>
          </Info>
        </Row>
      </Footer>
    </Container>
  );
};

export default RepoCard;
