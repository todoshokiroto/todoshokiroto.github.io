function celsiusToFahrenheit(celsius){
    return celsius*1.8 + 32;
}

//usando o modulo.exports para deixar a função acessivel para outros scripts
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function(fahrenheit){
    return (fahrenheit-32) /1.8;
}

