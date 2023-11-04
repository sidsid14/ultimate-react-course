import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: orangered;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Row>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button>Check In</Button>
            <Button variation="secondary" size="small">
              Check Out
            </Button>
          </div>
        </Row>
        <Row>
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </Row>
    </>
  );
}

export default App;
