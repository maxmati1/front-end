var n1 = "", n2 = "", op ="", resultado = "0"

function numero(value) {
    if (op === "") {
        n1 += value; 
    } else {
        n2 += value; 
    }
    document.getElementById("tela").value = n1 + op + n2;
}
function operador(value){
    if(n1 !== ""){
        op = value;
        document.getElementById("tela").value = n1 + op
    }
}
function limpar() {
        n1 = n2 = op = "";
        resultado = "0";
        document.getElementById("tela").value = "";
    }

function calcular(){
    if (n1 !== "" && n2 !== "" && op !== "") {
                var num1 = Number(n1);
                var num2 = Number(n2);

                if (op === "+") resultado = num1 + num2;
                if (op === "-") resultado = num1 - num2;
                if (op === "*") resultado = num1 * num2;
                if (op === "/") resultado = num1 / num2;

                n1 = resultado.toString();
                n2 = op = "";
                document.getElementById("tela").value = n1;
}}
