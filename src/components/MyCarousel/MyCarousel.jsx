import { Carousel, Row, Col } from "react-bootstrap";
import AllMovies from "../AllMovies/AllMovies";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Row>
          <Col>
            <AllMovies />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
