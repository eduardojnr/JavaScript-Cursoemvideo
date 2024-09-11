function obter_html() {
    var num = Number.parseInt(document.getElementById('numero').value)
    var div_msg = document.getElementById('div_msg')
    return [num, div_msg]
}

function verificar_entrada() {
    var [num, div_msg] = obter_html()
    
    if (num > 0) {
        limpar_div(div_msg)
        calcular_tabuada(num, div_msg)
    } else {
        limpar_div(div_msg)
        div_msg.innerHTML = '<br>Insira um número.'
    }
}

function calcular_tabuada(num, div_msg) {
    for (var i = 0; i <= 10; i++) {
        var msg_retorno = "<br>"
        div_msg.innerHTML += `${msg_retorno}${num} * ${i} = ${num * i}`
    }
}

function limpar_div(div_msg) {
    div_msg.innerHTML = ""
}