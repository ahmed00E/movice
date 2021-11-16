import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { title, release, description, image, } = this.props

    return (
      <div className="m-5">
        <div className="card" style={{width: "18rem"}}>
          <img src={`https://image.tmdb.org/t/p/w300${image}`} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title text-center mb-3">{title}</h5>
            <p className="card-text text-center">{release}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;