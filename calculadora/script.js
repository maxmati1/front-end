function numero(value) {
    document.getElementById("tela").value += value;
}

function limpar() {
    document.getElementById("tela").value = "";
}
function calcular(){
    var resultado = eval(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado
    
}
