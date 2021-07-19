import { NewsArticle } from "../utils/Fetch";
import styled from "styled-components";
import { Menu, Dropdown, Button } from "antd";

export function Card(article: NewsArticle) {
  /**
   * These are menu dropdown values.
   */
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => alert(" ID : " + article.id + "\n Action: Edit")}
      >
        Edit
      </Menu.Item>
      <Menu.Item
        onClick={() => alert(" ID : " + article.id + "\n Action: Delete")}
      >
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <CardContainer>
        <ImageContainer src={article.thumbnail} alt="none"></ImageContainer>
        <MetaContainer>
          <div>
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
          </div>
          <AntdDropDown overlay={menu} placement="topLeft" arrow>
            <Button>:</Button>
          </AntdDropDown>
        </MetaContainer>
      </CardContainer>
    </>
  );
}

const MetaContainer = styled.div`
  display: flex;
`;

const AntdDropDown = styled(Dropdown)`
  position: relative;
  top: 1.5rem;
`;

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
