function celsiusToFahrenheit(celsius){
    return celsius*1.8 + 32;
}
const celsiusInput = process.argv[2];
console.log(celsiusToFahrenheit(celsiusInput));
