import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { NewsArticle, getNewsArticle } from "../utils/Fetch";
import { Card } from "../components/Card";
import { SearchBox } from "../components/SearchBox";
import { useCounter } from "../hooks/useCounter";

function MainPage() {
  const [newsArticle, setNewsArticle] = useState<NewsArticle[]>();
  const [searchBox, setSearchBox] = useState<string>("");
  const { counter, increment, decrement } = useCounter();

  useEffect(() => {
    async function getResults(counter: number, searchBox: string) {
      const result = await getNewsArticle(counter, searchBox);
      setNewsArticle(result);
    }
    getResults(counter, searchBox);
  }, [counter, searchBox]);

  return (
    <>
      <SearchBox
        counter={counter}
        increment={increment}
        decrement={decrement}
        setSearchBox={setSearchBox}
      />
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
