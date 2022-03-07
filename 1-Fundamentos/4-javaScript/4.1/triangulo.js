const a = 100;
const b = 60; 
const c = 20;
let valor = a + b + c === 180;

if (valor) {
    console.log("true");
}
    else if (valor < 180 || valor > 180) {
        console.log("false");
    }

else {
    console.log("Erro");
}