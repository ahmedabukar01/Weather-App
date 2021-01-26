class Forecast{
    constructor(){
        this.key = 'nysrG3uBbXl6PSEXfjhB1DLEGzjrliBo';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    }
    async gettingThings(city){
        const cityDet = await this.getCity(city);
        const weatherDet = await this.getWeather(cityDet.Key);
    
        return {
            cityDet,
            weatherDet
        }
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURL + query);
        const data = await response.json();
    
        return data[0];
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
    
        return data[0];
    }

}

