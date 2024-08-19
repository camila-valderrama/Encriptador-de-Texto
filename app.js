const textArea = document.querySelector(".cuerpo__encriptador-principal__texto");
const mensaje = document.querySelector(".cuerpo__area-mensaje__muestra");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
        
    }
    return stringEncriptado;

}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
        
    }
    return stringDesencriptado;

}

function btnCopiar() {
    const campoMensaje = document.querySelector('.cuerpo__area-mensaje__muestra');
    campoMensaje.select();

    if (document.queryCommandSupported('copy')) {
        if (document.execCommand('copy')) {
            alert('Texto copiado al portapapeles');
        } else {
            alert('No se pudo copiar el texto. Inténtalo de nuevo.');
        }
    } else {
        alert('El comando de copiar no está soportado en este navegador.');
    }
}


