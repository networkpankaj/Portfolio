import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";
import Contact from "./components/Contact";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.png");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  );
}

export default App;
