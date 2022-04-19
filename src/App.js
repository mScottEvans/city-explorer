import React from 'react';
import axios from 'axios';



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

  handleSubmit = async (e) => {
    e.preventDefault();
    // Get data
    let cityData = axios.get();


    // save it to state
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityData = await axios.get(url);
    console.log(cityData.data[0]);
    this.setState({
      cityData: cityData.data[0]
    })
  }

  render() {

    return (
      <>
        <h1>
          Data for each city
        </h1>
        <form onSubmit={this.handleCitySubmit}>
          <label>
            <input type='text' name='city' onInput={this.handleCityInput} />
          </label>
          <button type='submit'>Explore</button>
        </form>
        {this.state.cityData ? (
          <>
            <p>City Name:{this.state.cityData.display_name}</p>
            <p>lon:{this.state.cityData.lon}</p>
            <p>lat:{this.state.cityData.lat}</p>
          </>
        ) : null}
      </>
    )
  }
}



export default App;