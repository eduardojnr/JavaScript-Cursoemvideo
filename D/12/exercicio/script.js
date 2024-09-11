function chamar_variaveis() {
    var selecao_div = window.document.getElementById('foto')
    var checkbox_input = window.document.querySelectorAll('#selecao_horario input[type="checkbox"]')
    return [selecao_div, checkbox_input]
}

function verificar_hora_sistema() {
    var agora = new Date()
    var hora_sistema = agora.getHours()

    if (6 <= hora_sistema && hora_sistema <= 16) {
        return '<img src="fotos/dia-copia.png" alt="">'
    } else if (17 <= hora_sistema && hora_sistema <= 18) {
        return '<img src="fotos/entardecer-copia.png" alt="">'
    } else if (19 <= hora_sistema || hora_sistema <= 5) {
        return '<img src="fotos/noite-copia.png" alt="">'
    }
}

function controlar_selecao() {
    var [selecao_div, checkbox_input] = chamar_variaveis()
    checkbox_input.forEach(escolha => {
        escolha.addEventListener('change', function() {
            if (this.checked) {
                checkbox_input.forEach(checkbox => {
                    if(checkbox !== this) {
                        checkbox.checked = false
                    }
                mostrar_foto()
                })
            } else {
                selecao_div.innerText = 'Selecione um horário.'
            }
        })
    })
}

function mostrar_foto() {
    var [selecao_div, checkbox_input] = chamar_variaveis()

    checkbox_input.forEach(escolha => {
        if (escolha.checked) {
            if (escolha.value == "automatico") {
                selecao_div.innerHTML = `${verificar_hora_sistema()}`
            } else if (escolha.value == "dia") {
                selecao_div.innerHTML = '<img src="fotos/dia-copia.png" alt="">'
            } else if (escolha.value == "entardecer") {
                selecao_div.innerHTML = '<img src="fotos/entardecer-copia.png" alt="">'                
            } else if (escolha.value == "noite") {
                selecao_div.innerHTML = '<img src="fotos/noite-copia.png" alt="">'
            }
        }
    })
}
