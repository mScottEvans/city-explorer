import React from 'react';

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
          <div key={index}>
            <p>{element.date}</p>
            <p>{element.description}</p>
          </div>
        ))}
      
      </>
    )
  }
}

export default Weather;
