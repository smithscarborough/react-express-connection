import React, { Component } from 'react';
import axios from "axios";

export default class Weather extends Component {
    constructor() {
        super()
        this.state = {
            weather: 'Pending button click...'
        };
    }

    handleClick = () => {
        axios.get('/HoustonWeather').then(response => {
            // console.log(response.data);
            this.setState({
                weather: response.data.temperatureFahrenheit
            })
        }); 
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Get weather in Houston</button>
                <h1>The weather in Houston is: {this.state.weather}</h1>
            </div>
        )
    }
}
