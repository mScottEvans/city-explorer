import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <div class='movieCard'key={index}>
            <Card style={{ width: '25%'}} >
              <Card.Text>{element.original_title}</Card.Text>
              <Card.Img style={{ width: '200px' }} src={element.image} alt={element.original_title}/>
              <Card.Text>Date{element.release_date}</Card.Text>
              <Card.Text>{element.overview}</Card.Text>
              <Card.Text>Vote Average: {element.vote_average}</Card.Text>
              <Card.Text>Vote Count: {element.vote_count}</Card.Text>
              <Card.Text>Popularity{element.popularity}</Card.Text>
            </Card>
          </div>
        ))}
      
      </>
    )
  }
}

export default Movie;
