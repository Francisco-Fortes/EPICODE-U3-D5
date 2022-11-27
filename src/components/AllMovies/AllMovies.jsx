import { Component } from "react";
import { Col } from "react-bootstrap";
import "./all-movies.css";

class AllMovies extends Component {
  state = {
    moviesData: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=cfdd44f2&s=harry%20potter`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          moviesData: data.Search,
        });
        // console.log(data.Search);
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // console.log("I am componentDidMount");
    this.fetchMovies();
  }

  render() {
    // console.log("I am render");
    return this.state.moviesData.map((movies) => {
      //   console.log(movies.Title);
      return (
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={2}
          key={movies.imdbID}
          className="movies-container p-0 no-wrap"
        >
          <img
            className="d-block w-100"
            src={movies.Poster}
            alt={movies.Title}
          />
        </Col>
      );
    });
  }
}
export default AllMovies;

// render() {
//     console.log("I am render");
//     return this.state.moviesData.map((movies) => {
//       console.log(movies);
//       return (
//         <Card key={movies.imdbID} style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={movies.poster} alt={movies.title} />
//         </Card>
//       );
//     });
//   }
