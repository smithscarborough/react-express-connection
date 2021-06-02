import React, { Component } from 'react';
import axios from "axios";

export default class Weather extends Component {
    constructor() {
        super()
        this.state = {
            weather: 'No weather found yet.'
        };
    }

    componentDidMount = () => {
        axios.get('/HoustonWeather').then(response => {
            console.log(response.data);
        }); 
    };

    render() {
        return (
            <div>
                <button>Get weather in Houston</button>
                <h1>The weather in Houston is: {this.state.weather}</h1>
            </div>
        )
    }
}
 