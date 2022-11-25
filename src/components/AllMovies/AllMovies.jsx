import { Component } from "react";
import { Col } from "react-bootstrap";
class SingleMovie extends Component {
  state = {
    moviesData: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=[API-KEY-HERE]harry%20potter`,
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
        <Col key={movies.imdbID}>
          <img
            className="movies-cover"
            src={movies.Poster}
            alt={movies.Title}
          />
        </Col>
      );
    });
  }
}
export default SingleMovie;

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
