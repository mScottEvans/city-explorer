import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'


import Weather from './Weather.js';
import Movie from './Movie.js';
// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
// import "./Weather.css";


// *******CONSTRUCTOR**********
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: 0,
      lat: null,
      lon: null,
      weatherData: [],
      movieData: [],
      error: false,
      errorMessage: ''
    }
  }



  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let cityData;
    try {


      // **********Variables***********
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      cityData = await axios.get(url);

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=14`;
      console.log(mapUrl);

      // ************Set State***************
      this.setState({
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        cityData: cityData.data[0],
        mapUrl: mapUrl,

      })

      // *********Call the Routes from the BackEnd****************
      // this.getWeather();
      // this.getMovie();
      
      
      
      
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: `I'm sorry but there was an error ${error.response.status}`
      })
    }
    this.getMovie();
    this.getWeather(cityData.data[0].lat, cityData.data[0].lon);
  }
  
  
  
  
  

  getWeather = async (lat, lon) => {
    // console.log(this.state);
    let weatherServerData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?query=${this.state.city}&lat=${lat}&lon=${lon}`);
    // console.log(weatherServerData);
    this.setState({
      weatherData: weatherServerData.data
    })
  }

  // https://api.themoviedb.org/3/search/movie/?api_key=2562381fdd717ad05bec78cf2edd237e&language=en-US&page=1&query=Seattle


  getMovie = async () => {
    console.log(this.state);
    let movieServerData = await axios.get(`${process.env.REACT_APP_SERVER}/movie?query=${this.state.city}`);
    console.log(movieServerData);
    this.setState({
      movieData: movieServerData.data
  })
}





  render() {

    return (
      <>
      

        <div class="header">
      
        <div class="data">
          
        <div class="form">
        <h1>Find your City</h1>
        <form onSubmit={this.handleCitySubmit}>
          <label>
            
            <input type='text' name='city' onInput={this.handleCityInput} />
          </label>
          <button type='submit'>Explore</button>
        </form>
        </div>
        
        <div class="cityData">
          <div>City: {this.state.cityData.display_name}</div>
          <div>Latitude: {this.state.cityData.lat}</div>
          <div>Longitude: {this.state.cityData.lon}</div>
          <img class="mapImg" src={this.state.mapUrl} />
        </div>
        </div>
        <div class="weather">
        <Weather weatherData={this.state.weatherData} />
        </div>

        </div>
        <div class="movie">
        <Movie movieData={this.state.movieData} />
        </div>

        <div class="error">
        {
          this.state.error ? <p style={{ textAlign: 'center' }}>{this.state.errorMsg}</p> : <p style={{ textAlign: 'center' }}>All is well!</p>
        }

        </div>

      
      </>

    );
  }
}



export default App;