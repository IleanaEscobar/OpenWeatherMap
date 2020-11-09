# OpenWeatherMap API wrapper for nodeJS

## About
A Node.js module for integrating with the OpenWeatherMap API. You must acquire an API key to use it.
## Installation
This project is hosted on npm. To install, use the command:
`npm i openweathermapwrapper`

## Usage
Create a client and then call one of the exposed methods. 
```
const OpenWeather = require('openweathermapwrapper')
const forecast = new OpenWeather('21b4c98c81ab5911942bb0d6fd5ee4c7') //Unique client code used for identification and authorization purposes. Contact OpenWeather to receive an API key.
  
forecast
		.location('London')						
                .details(true)	
                .excludeDay(true)
                .imperial(true)
                .details(true) // Boolean value (true or false) that specifies whether or not to include a truncated version of the forecasts object or the full object (details = true)
                .language("ru")
				.get()
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
```

## Contributions

Contributions welcomed and highly encouraged! To contribute, open an issue or a pull request.

## Copyright

Copyright (c) 2020 Isabel Escobar. See LICENSE for further details.
