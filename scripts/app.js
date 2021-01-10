const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUi =(data) =>{
    // normal way.
    /*
    const cityDet = data.cityDet;
    const weatherDet = data.weatherDet;
    */

    // destucturing way
   const {cityDet, weatherDet} = data;

    details.innerHTML = `
    <div class="detials">
    <h5>${cityDet.EnglishName}</h5>
    <div class="w-status">
        ${weatherDet.WeatherText}
    </div>
    <div class="temp-deg">
        <span>Temp ${weatherDet.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
</div>
    `;
    
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}
let gettingThings = async (city) =>{
    const cityDet = await getCity(city);
    const weatherDet = await getWeather(cityDet.Key);

    return {
        cityDet,
        weatherDet
    }
}
form.addEventListener('submit', e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    
    // getting data
    gettingThings(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));

});