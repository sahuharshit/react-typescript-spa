import styled from "styled-components";

export function SearchBox({ increment, decrement }: any) {
  return (
    <>
      <HeaderContainer>
        <h1>News Articles</h1>

        <Pagination>
          <span onClick={decrement}>Prev</span>
          <span>|</span>
          <span onClick={increment}>Next</span>
        </Pagination>
      </HeaderContainer>
      <Search type="search" placeholder="Search For News Articles" />
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
