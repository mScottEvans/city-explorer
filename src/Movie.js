import React from 'react';

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <>
        {this.props.movieData.map((element, index) => (
          <div key={index}>
            <p>Title{element.title}</p>
            <p>Overview{element.overview}</p>
            <p>Vote Average{element.vote_average}</p>
            <p>Vote Count{element.vote_count}</p>
            <p>IMG{element.poster_path}</p>
            <p>Popularity{element.popularity}</p>
            <p>Date{element.release_date}</p>
          </div>
        ))}
      
      </>
    )
  }
}

export default Movie;
