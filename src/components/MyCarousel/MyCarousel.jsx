import { Component } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import "./my-carousel.css";
import AllMovies from "../AllMovies/AllMovies";

class MyCarousel extends Component {
  state = {
    moviesData: [],
    saga: this.props.nameSaga,
  };
  render() {
    return (
      <>
        <h4 className="ml-4 mt-3">Most popular of {this.state.saga}</h4>
        <Carousel className="main-bg mt- mx-5">
          <Carousel.Item interval={5000}>
            <Row className="justify-content-center mt-2">
              <AllMovies nameSaga={this.state.saga} />
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Row className="justify-content-center mt-2">
              <AllMovies nameSaga={this.state.saga} />
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <Row className="justify-content-center mt-2">
              <AllMovies nameSaga={this.state.saga} />
            </Row>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default MyCarousel;
