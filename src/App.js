import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
// import CardImg from 'react-bootstrap/CardImg'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: 0,
      error: false,
      errorMessage: ''
    }
  }

  

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_PI_KEY}&q=${this.state.city}&format=json`;
  
      let cityData = await axios.get(url);
      
      
      console.log(cityData.data[0].lat);
      
      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=14`;
  
  
      this.setState({
        cityData: cityData.data[0],
        mapUrl: mapUrl
      })

    } catch(error) {
      this.setState({
        error: true,
        errorMsg: `I'm sorry but there was an error ${error.response.status}`
      })
    }

  }

  render() {

    // https://maps.locationiq.com/v3/staticmap?key=pk.aa509ab7074e99f7d6da90c4b42b40d0&center=40.7127281,-74.0060152&zoom=14
    return (
      <>
        <h1>
          Data for each city
        </h1>
        <form onSubmit={this.handleCitySubmit}>
          <label>
            Enter a city:
            <input type='text' name='city' onInput={this.handleCityInput} />
          </label>
          <button type='submit'>Explore</button>
        </form>
        <Card>
          <Card.Title>City: {this.state.cityData.display_name}</Card.Title>
          <Card.Text>Latitude: {this.state.cityData.lat}</Card.Text>
          <Card.Text>Longitude: {this.state.cityData.lon}</Card.Text>
          <Card.Img style={{width: '50%'}} src={this.state.mapUrl}/>
        </Card>
        {
          this.state.error ? <p style={{textAlign: 'center'}}>{this.state.errorMsg}</p> : <p style={{textAlign: 'center'}}></p>
        }
        
      </>
    )
  }
}



export default App;