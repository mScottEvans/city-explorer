import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div class="html">
        {this.props.movieData.map((element, index) => (
          <div class="container" key={index}>
            <div class="row">
              <div class="column" >
                <div class="text">{element.release_date}</div>
                <img class="img"src={element.image} alt={element.original_title} />
                <div class="text">{element.overview}</div>
                <div class="text">Vote Average: {element.vote_average}</div>
                <div class="text">Vote Count: {element.vote_count}</div>
                <div class="text">Popularity: {element.popularity}</div>
              </div>
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default Movie;
