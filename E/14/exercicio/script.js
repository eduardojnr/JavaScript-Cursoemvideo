function obter_html() {
    var tipo = document.querySelectorAll('fieldset#input_pa_pg input[type="checkbox"]')
    var inicio = Number.parseFloat(document.getElementById("input_inicio").value)
    var fim = Number.parseFloat(document.getElementById("input_fim").value)
    var razao = Number.parseFloat(document.getElementById("input_razao").value)
    var msg = document.getElementById("msg")

    return [tipo, inicio, fim, razao, msg]
}

function controlar_selecao() {
    var tipo = document.querySelectorAll('fieldset#input_pa_pg input[type="checkbox"]')
    tipo.forEach(escolha => {
        escolha.addEventListener('change', function() {
            if (this.checked) {
                tipo.forEach(checkbox => {
                    if (checkbox !== this) {
                        checkbox.checked = false
                    }
                })
            }
        })
    })
}

function validar_tipo_progressao() {
    var [tipo, inicio, fim, razao, msg] = obter_html()
    var status_selecao = false
    var msg_falha = ""

    tipo.forEach(escolha => {
        if (escolha.checked){
            status_selecao = true;
        
            if (escolha.value == "pa"){
                if (razao > 0) {
                    calcular_pa_crescente(inicio, fim, razao, msg)
                } else if (razao < 0) {
                    calcular_pa_decrescente(inicio, fim, razao, msg)
                } else {
                    msg_falha = "\nFalha\nRazão nula!"
                    msg.innerText = msg_falha
                }
            
            } else if (escolha.value == 'pg'){
                if (razao > 0) {
                    calcular_pg_positiva(inicio, fim, razao, msg)
                } else {
                    msg_falha = "\nFalha\nRazão nula ou negativa!"
                    msg.innerText = msg_falha
                }
        
            }
        }
    })

    if (!status_selecao) {
        msg_falha = "\nNenhuma seleção foi feita."
        msg.innerText = msg_falha
    }
}


function calcular_pa_crescente(inicio, fim, razao, msg) {
    var aux = inicio
    var msg_aux = `\n${inicio}`

    while ((aux + razao) <= fim) {
        msg_aux += ` > ${aux + razao}`
        aux += razao
    }
    msg.innerText = `${msg_aux}`    
}

function calcular_pa_decrescente(inicio, fim, razao, msg) {
    var aux = fim
    var msg_aux = `\n${fim}`
    while ((aux + razao) >= inicio) {
        msg_aux += ` > ${aux + razao}`
        aux += razao
    }
    msg.innerText = `${msg_aux}`    
}

function calcular_pg_positiva(inicio, fim, razao, msg) {
    var aux = inicio
    var msg_aux = `\n${inicio}`

    while ((aux * razao) <= fim) {
        msg_aux += ` > ${aux * razao}`
        aux *= razao
    }

    msg.innerText = `${msg_aux}`
}
