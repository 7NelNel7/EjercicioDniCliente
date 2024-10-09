function verificarNumeroTarjeta(num){
    "use strict"
    let cadena=num.toString();
    let arrayNum=[];
    let cont=0;
    //rellenar array con los numeros
    for (let i = cadena.length - 1; i >= 0; i--) {
        arrayNum.push(parseInt(cadena.charAt(i), 10));
    }
    for(let j=0;j<arrayNum.length;j++){
        if(j%2!=0){
            arrayNum[j]*=2;
            if(arrayNum[j]>9){
            arrayNum[j]-=9;
            }
        }
    }
    let suma=0;
    arrayNum.forEach(function(elemento){
        suma+=elemento;
    });
    if(cadena.length>16 || cadena.length<16){
        console.log("Has metido un numero que no tiene 16 digitos, por lo que no es valido");
    }
    if(suma%10===0){
        console.log("El numero que has introducido es valido para una tarjeta de credito");
    }else{
        console.log("El numero que has introducido no es valido para una tarjetra de credito");
    }
}
verificarNumeroTarjeta(55000000000004);