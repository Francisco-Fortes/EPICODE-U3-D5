import { Footer, Container, Row } from "react-bootstrap";
import "./my-footer.css";

const MyFooter = () => {
  return (
    <Footer>
      <Container>
        <Row>
          <span>I am the footer</span>
        </Row>
      </Container>
    </Footer>
  );
};

export default MyFooter();
