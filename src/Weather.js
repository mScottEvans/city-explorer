import React from 'react';
import './Weather.css';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <>
        {this.props.weatherData.map((element, index) => (
          <div class="row" key={index}>
            <p>Weather Data</p>
            <p>{element.date}</p>
            <p>{element.description}</p>
          </div>
          
        ))}
      
      </>
    )
  }
}

export default Weather;
