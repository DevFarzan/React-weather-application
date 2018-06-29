var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e3383499e7315ddba421f5a962d06f4f'

module.exports = {
  getTemp:function(Location){
    var encodedLocation = encodeURIComponent(Location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.sys.message){
        throw new Error(res.data.sys.message);
      }else{
        return res.data.main.temp;
      }
    },function(err){
      throw new Error(res.data.sys.message);
    });
  }
}
