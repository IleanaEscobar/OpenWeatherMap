# OpenWeatherMap API wrapper for nodeJS

## About
A Node.js module for integrating with the OpenWeatherMap API. You must acquire an API key to use it.
## Installation
The project is hosted on npm

`npm i openweathermapwrapper`

## Usage
Create a client and then call one of the exposed methods. 
```
const forecast = new OpenWeather('21b4c98c81ab5911942bb0d6fd5ee4c7') //Unique client code used for identification and authorization purposes. Contact AccuWeather to receive an API key.
  
forecast
				.location('London')		
				.language("ru")			
				.metric(true)					// Boolean value (true or false) that specifies to return the data in either metric (=true) or imperial units 
				.details(true)					// Boolean value (true or false) that specifies whether or not to include a truncated version of the forecasts object or the full object (details = true)
				.get()
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
```


## Copyright

Copyright (c) 2020 Isabel Escobar. See LICENSE for further details.
