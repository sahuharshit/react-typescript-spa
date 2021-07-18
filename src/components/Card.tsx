import { NewsArticle } from "../utils/Fetch";
import styled from "styled-components";

export function Card(article: NewsArticle) {
  return (
    <>
      <CardContainer>
        <ImageContainer src={article.thumbnail} alt="none"></ImageContainer>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid red;
  padding: 20px;
  margin: 10px 20px 10px 0;
`;

const ImageContainer = styled.img`
  height: 70%;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 700;
  margin: 5px 0;
`;

const Description = styled.div`
  font-weight: 500;
`;
