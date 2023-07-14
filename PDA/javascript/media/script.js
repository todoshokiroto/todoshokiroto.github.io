var N1 =  prompt('Nota 1');
var N2 = prompt('Nota 2');
var N3 = prompt('Nota 3');
/*
let N1n = parseFloat(N1);
let N2n = parseFloat(N2);
let N3n = parseFloat(N3);
*/
var media = (N1+N2+N3)/3;
console.log(media)
if (media<6){
    alert('Infelizmente você foi reprovado')
}
else if(media <= 8){
    alert('Boa, chegou lá')
}
else{
    alert('Parabens pelo empenho')
}
