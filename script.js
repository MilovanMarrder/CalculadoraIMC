
function calcularIMC(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var resultado = parseFloat((peso/2.2)/(altura * altura)).toFixed(2);
    if(resultado > 30){
        document.getElementById("RP").innerHTML= 'Tu Indice de masa corporal es: ' + resultado + " tienes obesidad";

    }else if(resultado > 25){
        document.getElementById("RP").innerHTML= 'Tu Indice de masa corporal es: ' + resultado + " tienes sobrepeso";

    }else if(resultado > 20){
        document.getElementById("RP").innerHTML= 'Tu Indice de masa corporal es: ' + resultado + " tienes un peso saludable";    
    }else if(resultado <= 20){
        document.getElementById("RP").innerHTML= 'Tu Indice de masa corporal es: ' + resultado + " estas delgado";
    }
}
