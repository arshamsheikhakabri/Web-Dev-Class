const pounds = document.getElementById('weight')
const grams = document.getElementById('grams')
const kilograms = document.getElementById('kilograms')
const ounces = document.getElementById('ounces')
pounds.addEventListener('input', function(){
    const rs= parseFloat(pounds.value)
    const rz = (rs*453.59237)
    const rt = (rs/2.205)
    const rh = (rs*16)
    grams.innerHTML = 'grams:' + rz 
    kilograms.innerHTML = 'kilograms:' + rt 
    ounces.innerHTML = 'ounces:' + rh 

})