var N1 = prompt('Primeiro Numero')
var N1n = parseFloat(N1);

var operacao = prompt('Operacao')

var N2 = prompt('Segundo Numero')
var N2n = parseFloat(N2);

if(operacao == 'x' || operacao == '*'){
    console.log(N1n*N2n);
}
else if(operacao == '/'){
    console.log(N1n/N2n)

}
else if(operacao == '+'){
    console.log(N1n+N2n);
}
else if(operacao == '-'){
    console.log(N1n-N2n)
}