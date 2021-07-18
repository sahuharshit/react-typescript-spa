import styled from "styled-components";

export function SearchBox({
  counter,
  increment,
  decrement,
  setSearchBox,
}: any) {
  return (
    <>
      <HeaderContainer>
        <h1>News Articles</h1>
        <div>
          <Pagination>
            <span onClick={decrement}>Prev</span>
            <span>|</span>
            <span onClick={increment}>Next</span>
          </Pagination>
          <CounterContainer>Page : {counter + 1}</CounterContainer>
        </div>
      </HeaderContainer>
      <Search
        type="search"
        placeholder="Search For News Articles"
        onChange={(e) => setSearchBox(e.target.value)}
      />
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CounterContainer = styled.div`
  margin: 10px 0;
`;
const Pagination = styled.span`
  border: 1px solid black;
  display: flex;
  align-items: center;

  > span {
    padding: 0 10px;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

const Search = styled.input`
  height: 30px;
  width: 30vw;
  padding: 0 10px;
  margin: 10px 0;
`;
