import { Container, Body, Header, Footer, Title } from "./style";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Table from "../../components/Table";

// eslint-disable-next-line
export default () => {
  return (
    <Container>
      <Header>
        <Title>Maze runner</Title>
      </Header>
      <Body>
        <Title>Body</Title>
        <Box children="Box" />
        <Button children="Button" />
        <Table children="Table" />
      </Body>
      <Footer>Footer</Footer>
    </Container>
  );
};
