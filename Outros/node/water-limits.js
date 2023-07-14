/* water-limits.js */
const convert = require('./converter')
   
  const freezingPointC = 0;
  const boilingPointC = 100;
   
  const freezingPointF = convert.celsiusToFahrenheit(freezingPointC);
  const boilingPointF = convert.celsiusToFahrenheit(boilingPointC);
   
  console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
  console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);