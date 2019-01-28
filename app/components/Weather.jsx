var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        };
    },
    handleSearch : function(location){
        var self = this;

        this.setState({isLoading:true});

        openWeatherMap.getTemp(location).then(function(temp){

            self.setState({
                location: location,
                temp: temp,
                isLoading:false
            });


        },function(errorMessage){

            self.setState({isLoading:false});

            alert(errorMessage);
        });
/*         this.setState({
            location: location,
            temp: 23
        });
 */        
    },
    render: function(){

        var {isLoading, location, temp} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h1 className="text-center">Fetching Weather...</h1>
            }else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return (
            <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            
            {renderMessage()}
            </div>
        );
    }

});

module.exports = Weather;