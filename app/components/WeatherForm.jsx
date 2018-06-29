var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();

    var location = this.refs.Location.value;
    if(location.length>0){
      this.refs.Location.value = '';
      this.props.onSearch(location);
    }
  },
  render:function(){
    return(
      <div>
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="enter country name" ref="Location"/><br/>
        <button>Get weather</button>
      </form>

      </div>
    );
  }
});
module.exports = WeatherForm;
