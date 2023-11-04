import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: orangered;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Heading as="h3">Form</Heading>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Input type="number" placeholder="Number of guests" />
      </div>
    </>
  );
}

export default App;
