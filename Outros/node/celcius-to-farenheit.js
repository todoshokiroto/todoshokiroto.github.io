const {celsiusToFahrenheit} = require('./converter')
const celsiusInput = process.argv[2];
console.log(celsiusToFahrenheit(celsiusInput));
