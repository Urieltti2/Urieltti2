var estaCriptografado = false;

function criptografarMensagem() {
    var textoEntrada = document.getElementById('inputText').value.trim();
    if (textoEntrada === '') {
        alert('Por favor, insira uma mensagem para criptografar.');
        return;
    }
    var textoCriptografado = cifraDeCesar(textoEntrada, 3, true);
    document.getElementById('outputText').value = textoCriptografado;
    estaCriptografado = true;
    document.getElementById('encryptButton').disabled = true;
    document.getElementById('decryptButton').disabled = false;
}

function descriptografarMensagem() {
    var textoEntrada = document.getElementById('outputText').value.trim();
    if (textoEntrada === '') {
        alert('Por favor, insira uma mensagem para descriptografar.');
        return;
    }
    var textoDescriptografado = cifraDeCesar(textoEntrada, 3, false); // Usando o mesmo deslocamento negativo (-3) para descriptografar
    document.getElementById('inputText').value = textoDescriptografado;
    document.getElementById('outputText').value = '';
    estaCriptografado = false;
    document.getElementById('encryptButton').disabled = false;
    document.getElementById('decryptButton').disabled = true;
}



function cifraDeCesar(texto, deslocamento, criptografar) {
    var resultado = '';
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            if (criptografar) {
                resultado += String.fromCharCode((charCode - 65 + deslocamento) % 26 + 65);
            } else {
                resultado += String.fromCharCode((charCode - 65 - deslocamento + 26) % 26 + 65);
            }
        } else if (charCode >= 97 && charCode <= 122) {
            if (criptografar) {
                resultado += String.fromCharCode((charCode - 97 + deslocamento) % 26 + 97);
            } else {
                resultado += String.fromCharCode((charCode - 97 - deslocamento + 26) % 26 + 97);
            }
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}


