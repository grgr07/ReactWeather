var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        };
    },
    handleSearch : function(location){
        var self = this;

        this.setState({
            isLoading:true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp){

            self.setState({
                location: location,
                temp: temp,
                isLoading:false
            });


        },function(e){

            self.setState({
                isLoading:false,
                errorMessage: e.message
            });

        });
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/';
        }

    },
    componentDidMount: function(){
        var location = this.props.location.query.location;
        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function(){

        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h1 className="text-center">Fetching Weather...</h1>
            }else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError(){
            if(typeof errorMessage === 'string'){
                console.log(typeof errorMessage);

                return <ErrorModal message={errorMessage} />;
            }
        }

        return (
            <div>
            <h1 className="text-center page-title">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            
            {renderMessage()}
            {renderError()}
            </div>
        );
    }

});

module.exports = Weather;