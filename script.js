function calcularIMC (){
    var altura = parseFloat(document.querySelector('#altura').Value);
    var peso = parseFloat(document.querySelector('#peso').Value);
    var resultado = parseFloat((peso/2.2)/((altura/100)*(altura/100)));

    return document.querySelector('#aquiRespuesta').innerHTML = `Tu IMC es `+ resultado;
}
