const form = document.querySelector('form');

let updateUi = async (city) =>{
    console.log(city);
}
form.addEventListener('submit', e=>{
    form.preventDefault();
    const city = form.city.trim();
    form.reset();
    updateUi(city);

});