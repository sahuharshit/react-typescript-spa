import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { NewsArticle, getNewsArticle } from "../utils/Fetch";
import { Card } from "../components/Card";
import { SearchBox } from "../components/SearchBox";
import { useCounter } from "../hooks/useCounter";

function MainPage() {
  const [newsArticle, setNewsArticle] = useState<NewsArticle[]>();
  const { counter, increment, decrement } = useCounter();

  useEffect(() => {
    (async () => {
      setNewsArticle(await getNewsArticle(counter));
    })();
  });

  return (
    <>
      <SearchBox increment={increment} decrement={decrement} />
      <CardContainer>
        {newsArticle?.map((article, index) => {
          return <Card {...article} key={index} />;
        })}
      </CardContainer>
    </>
  );
}
export default MainPage;

const CardContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
`;
