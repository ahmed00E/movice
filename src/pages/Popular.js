 import React, { Component } from 'react';

import Card from '../components/Card'

class Popular extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          movies: data.results
        })
      })
  }
  
  render() {
    const { movies } = this.state

    return (
      <div className="container">
        <h1 className="my-5 text-center">Populaire</h1>

        <div className="d-flex flex-wrap justify-content-center">
        {movies.map(movie => (
          <Card 
              title={movie.title}
              release={movie.release_date}
              description={movie.overview}
              image={movie.poster_path}
            />
        ))}
        </div>

      </div>
    );
  }
}

export default Popular;