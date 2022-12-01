import { Component } from "react";
import { Col, Spinner, Alert } from "react-bootstrap";
import "./all-movies.css";

class AllMovies extends Component {
  state = {
    moviesData: [],
    saga: this.props.nameSaga,
    isLoading: true,
    isError: false,
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=cfdd44f2&s=" + this.state.saga,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          moviesData: data.Search,
          isLoading: false,
        });
        // console.log(data.Search);
      } else {
        console.log("There was an error while fetching the data");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    // console.log("I am componentDidMount");
    this.fetchMovies();
  }

  render() {
    // console.log("I am render");
    return this.state.moviesData.map((movies) => {
      <>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="danger"></Spinner>
        )}
        {this.state.isError && (
          <Alert variant="danger">Something went wrong</Alert>
        )}
      </>;
      //   console.log(movies.Title);
      return (
        <Col key={movies.imdbID} className="m-0">
          <img
            className="d-block w-100 px-1 movies"
            src={movies.Poster}
            alt={movies.Title}
          />
        </Col>
      );
    });
  }
}
export default AllMovies;
