var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState:function(){
    return {
     isLoading:false
    }
  },
  handleSearch:function(location){
    var that = this;
      //========================isLoading=======================================//

      that.setState({isLoading:true});


    var baseURL = `http://api.openweathermap.org/data/2.5/weather?appid=e3383499e7315ddba421f5a962d06f4f&q=${location}&units=imperial`;
		fetch(baseURL)
		.then(response => response.json())
		.then(data => {
				console.log(data);
        console.log(data.main);
				that.setState({
					location:location,
          temp:data.main.temp,
          isLoading:false
				});
			}
		)
		.catch(error => {
      console.log(error);
      that.setState({
        isLoading:false
      });
    });

  },
  render:function(){
    var {isLoading, temp, location} = this.state;
    function renderMessage(){
        if(isLoading){
          return <h3>Fetching data.....</h3>
        }else if(temp && location){
          return <WeatherMessage temp={temp} location={location}/>
        }
    }
    return(
      <div>
      <center>
          <h3>Get Weather</h3>
          <WeatherForm onSearch={this.handleSearch}/><br/>
          {renderMessage()}
      </center>
      </div>
    );
  }
});
module.exports = Weather;
