const form = document.querySelector('form');

let updateUi = async (city) =>{
    const cityDet = await getCity(city);
    const weatherDet = await getWeather(cityDet.Key);

    return {
        cityDet:cityDet,
        weatherDet:weatherDet
    }
}
form.addEventListener('submit', e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    
    // updating Ui
    updateUi(city)
    .then(data=>{
        console.log(data);
    })

});