import React, { Component } from "react";

class Marvel extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("https://omdbapi.com/?s=avengers&apikey=7880183f")
      .then(res => {
        res.json();
      })
      .then(data => {
        this.setState({ movies: data });
      });
  }
  render() {
    let Movies = () => {
      return this.state.movies.map(movie => {
        let { Title, Year, Type, Poster } = movie;
        return (
          <div className="movieCard">
            <img src={Poster} alt={Title} />
            <h3>{Title}</h3>
            <p>{Type}</p>
            <p>{Year}</p>
          </div>
        );
      });
    };

    return <Movies />;
  }
}

export default Marvel;
