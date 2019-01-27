var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {location, temp} = this.props;
//         return (
//             <h3>It's it {temp} in {location}</h3>
//         );
//     }

// });

//var WeatherMessage = (props) =>{
//    var {location, temp} = props;
  
var WeatherMessage = ({temp, location}) =>{
    return (
        <h3>It's it {temp} in {location}</h3>
    );
};


module.exports = WeatherMessage;