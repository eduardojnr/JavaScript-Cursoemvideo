function obter_html() {
    var entrada = Number.parseFloat(document.getElementById('numero').value)
    var select = document.getElementById('visor')

    return [entrada, select]
}

var numeros_armazenados = []
var entrada_aux = document.getElementById('numero')

function verificar_valores() {
    var [entrada, select] = obter_html()

    if (entrada >= 1 && entrada <= 100) {
        if (!(numeros_armazenados.includes(entrada))) {
            numeros_armazenados.push(entrada)
            adicionar_select(entrada, select)
            finalizar()
            entrada_aux.value = ''
            entrada_aux.focus()
        } else {
            window.alert("Você inseriu um número repetido.")
            entrada_aux.value = ''
            entrada_aux.focus()
        }
    } else {
        window.alert("Você inseriu um número fora do intervalo especificado.")
        entrada_aux.value = ''
        entrada_aux.focus()
    }
}

function adicionar_select(entrada, select) {
    var option = document.createElement('option')
    option.text = `Valor ${entrada} adicionado.`
    select.add(option)
}

var div = document.getElementById('retorno')

function finalizar() {
    if (!numeros_armazenados.length <= 0) {
        var qtd_numeros = numeros_armazenados.length
        var maior_valor = Math.max.apply(null, numeros_armazenados)
        var menor_valor = Math.min.apply(null, numeros_armazenados)
        var soma_valores = numeros_armazenados.reduce((contador, valor_atual) => contador + valor_atual, 0)
        var media_valores = soma_valores / qtd_numeros

        div.innerHTML = `<br>Ao todo, temos ${qtd_numeros} números cadastrados.<br><br>
                        O maior valor informado foi ${maior_valor}.<br><br>
                        O menor valor informado foi ${menor_valor}.<br><br>
                        A soma dos valores informados é ${soma_valores}.<br><br>
                        A média dos valores informados é ${media_valores}.<br><br>
                        `
    } else {
        window.alert('Nenhum número foi digitado!')
        entrada_aux.focus()
    }
}