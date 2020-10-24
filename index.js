// code to be continued...
'use strict';
const req = require('request');
const moment = require('moment');
const queryString = require('query-string');

class OpenWeather {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.loc = '';
        this.query = {}
    }

    location(city) {
        // Used to search for a specific location.

        !city ? null : this.loc = city;
        return this;
    }

    time(val) {
        // Unique ID that can be used to search for a specific location.

        !val ? this.time = 'hourly/1hour' : this.time = val;
        return this;
    }

    language(lan) {
        // http://apidev.accuweather.com/developers/languages
        // String indicating the language in which to return the resource.
        // Default value set to en-us.

        !lan ? null : this.query.language = lan;
        return this;
    }

    details(bool) {
        // Boolean value (true or false) specifies whether or not to include the full object.
        //Default value set to false.
        //(For location searches, details = true will return AccuWeather related details).

        !bool ? null : this.query.details = bool;
        return this;
    }

    metric(bool) {
        // Boolean value (true or false) that specifies to return the data in either metric (=true) or imperial units.

        !bool ? null : this.query.metric = bool;
        return this;
    }

    generateReqUrl() {
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.loc}&appid=${this.apiKey}`;
        this.query ? this.url += `&${queryString.stringify(this.query)}` : this.url;
    }

    get() {
        return new Promise((resolve, reject) => {
            this.generateReqUrl();
            req({ url: this.url, json: true }, (err, res, body) => {
                err ? reject(`Forecast cannot be retrieved. ERROR: ${err}`) : null;
                res.statusCode !== 200 ? reject(`Forecast cannot be retrieved. Response: ${res.statusCode} ${res.statusMessage}`) : null;
                resolve(body)
            })
        })
    }
}

module.exports = OpenWeather

const forecast = new OpenWeather('21b4c98c81ab5911942bb0d6fd5ee4c7') //Unique client code used for identification and authorization purposes. Contact AccuWeather to receive an API key.
  
forecast
				.location('London')				// http://apidev.accuweather.com/developers/locationsAPIguide
			//	.time('hourly/1hour')				// http://apidev.accuweather.com/developers/forecastsAPIguide
				.language("ru")					// http://apidev.accuweather.com/developers/languages
				.metric(true)					// Boolean value (true or false) that specifies to return the data in either metric (=true) or imperial units 
				.details(true)					// Boolean value (true or false) that specifies whether or not to include a truncated version of the forecasts object or the full object (details = true)
				.get()
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})