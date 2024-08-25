let listaLlavesEncriptación = ["ai","enter","imes","ober","ufat"];
let listaVocales = ["a","e","i","o","u"];
document.getElementById("container__encriptado__texto").style.display="none";
let intentos = 0;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function Display(){
    document.getElementById("container__encriptado__inicio").style.display="none";
    document.getElementById("container__encriptado__texto").style.display="block";
}

function ValidacionTexto(){
    let textoUsuario = document.getElementById('textoUsuario').value;
    if(/[A-Z]/.test(textoUsuario) && /[áéíóú]/.test(textoUsuario)){
        asignarTextoElemento('.texto__instrucciones', 'Escribe solo letras minúsculas y sin acentos');
        return null;
    }
    if (/[A-Z]/.test(textoUsuario)) {
        asignarTextoElemento('.texto__instrucciones', 'Escribe solo letras minúsculas');
        return null;
    }
    if (/[áéíóú]/.test(textoUsuario)) {
        asignarTextoElemento('.texto__instrucciones', 'Escribe el texto sin acentos');
        return null;
    }
    if (textoUsuario == ""){
        asignarTextoElemento('.texto__instrucciones', 'Pero escribe algo jaja');
        return null;
    } else {
        asignarTextoElemento('.texto__instrucciones', 'Muy bien :)');
        intentos +=1;
    }
    return textoUsuario;
}

function RegresarTexto() {
    if(intentos >= 1){
        asignarTextoElemento('.texto__instrucciones', 'Solo letras minúsculas y sin acentos');
    }
}


function Encriptar(){
    let textoUsuario = ValidacionTexto();
    if (textoUsuario === null) return; 
    let textoEncriptado = "";
    contador = 0;
    while (contador < textoUsuario.length){
        if (textoUsuario[contador] ==listaVocales[0] || textoUsuario[contador] ==listaVocales[1] || textoUsuario[contador] ==listaVocales[2] || textoUsuario[contador] ==listaVocales[3] || textoUsuario[contador] ==listaVocales[4]){
            if (textoUsuario[contador] ==listaVocales[0]){
                textoEncriptado+=listaLlavesEncriptación[0];
            }
            if (textoUsuario[contador] ==listaVocales[1]){
                textoEncriptado+=listaLlavesEncriptación[1];
            }
            if (textoUsuario[contador] ==listaVocales[2]){
                textoEncriptado+=listaLlavesEncriptación[2];
            }
            if (textoUsuario[contador] ==listaVocales[3]){
                textoEncriptado+=listaLlavesEncriptación[3];
            }
            if (textoUsuario[contador] ==listaVocales[4]){
                textoEncriptado+=listaLlavesEncriptación[4];
            }
         
        } else {
            textoEncriptado+=textoUsuario[contador];
        }
        console.log(textoEncriptado);
        contador+=1;
    } 
    Display();
    let textoMostrado = document.getElementById("textoMostrado");
    textoMostrado.value = textoEncriptado;
}

function Desencriptar(){
    let textoUsuario = ValidacionTexto();
    if (textoUsuario === null) return; 
    let textoDesencriptado = textoUsuario;
    for (let contador=0; contador<listaLlavesEncriptación.length; contador++){
        let regex = new RegExp(listaLlavesEncriptación[contador], "g");
        textoDesencriptado = textoDesencriptado.replace(regex, listaVocales[contador]);
    }
    Display();
    let textoMostrado = document.getElementById("textoMostrado");
    textoMostrado.value = textoDesencriptado;
}



function Copiar(){
    let textoMostrado = document.getElementById("textoMostrado");
    textoMostrado.select();
    document.execCommand("copy");
}
