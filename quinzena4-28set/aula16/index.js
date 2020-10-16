//dados de teste das funções de classificação
// let arrDespesas = [
//     {valor: 1,tipo: 'alimentação', descricao: 'aaaa'},
//     {valor: 10,tipo: 'viagem', descricao: 'bbb'},
//     {valor: 5,tipo: 'utilidades', descricao: 'ccc'},
//     {valor: 20,tipo: 'alimentação', descricao: 'ddd'},
//     {valor: 30,tipo: 'viagem', descricao: 'eee'},
//     {valor: 40,tipo: 'utilidades', descricao: 'fff'}
//     ]
let arrDespesas = []

imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((despesa) => {
        divDespesas.innerHTML += `<p>valor: R$${despesa.valor} | tipo: ${despesa.tipo} | descrição: ${despesa.descricao}</p>`
    });


}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0
    // AQUI VEM A IMPLEMENTAÇÃO

    arrDespesas.forEach(despesa => {
        switch (despesa.tipo) {
            case 'viagem':
                gastoViagem += despesa.valor;
                break;
            case 'alimentação':
                gastoAlimentacao += despesa.valor
                break;
            case 'utilidades':
                gastoUtilidades += despesa.valor
                break;
        }
    })

    gastoTotal = arrDespesas.reduce(
        (total, atual) => {
            return total + atual.valor
        }, 0)

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
    imprimirDespesas(arrDespesas)
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    //Se não for colocado valor máximo, recebe MAX VALUE
    let valorMax = (
        Number(document.getElementById('valorFiltroMax').value) === 0 ?
            Number.MAX_VALUE :
            Number(document.getElementById('valorFiltroMax').value))
    //Se valor mínimo maior q valor máximo exibe um alert
    let valorMin = (
        Number(document.getElementById('valorFiltroMin').value) >= valorMax ?
            alert('O valor mínimo não pode ser maior que o valor máximo') :
            Number(document.getElementById('valorFiltroMin').value))


    let despesasFiltradas = [] // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    switch (tipoFiltro) {
        case 'todos':
            despesasFiltradas = arrDespesas.filter(despesa => {
                return (despesa.valor >= valorMin && despesa.valor <= valorMax)
            })
            break;
        case 'alimentação':
            despesasFiltradas = arrDespesas.filter(despesa => {
                return (despesa.tipo === 'alimentação' && despesa.valor >= valorMin && despesa.valor <= valorMax)
            })
            break;
        case 'utilidades':
            despesasFiltradas = arrDespesas.filter(despesa => {
                return (despesa.tipo === 'utilidades' && despesa.valor >= valorMin && despesa.valor <= valorMax)
            })
            break;
        case 'viagem':
            despesasFiltradas = arrDespesas.filter(despesa => {
                return (despesa.tipo === 'viagem' && despesa.valor >= valorMin && despesa.valor <= valorMax)
            })
            break;
        default:
            despesasFiltradas = arrDespesas.filter(despesa => {
                return (despesa.valor >= valorMin && despesa.valor <= valorMax)
            })
            break;
    }

    imprimirDespesas(despesasFiltradas)
}

function ordenar() {
    imprimirDespesas(arrDespesas.sort(
        (d1, d2) => {
            if (d1.valor < d2.valor) {
                return 1
            } else if (d1.valor > d2.valor) {
                return -1
            } else {
                return 0
            }
        })
    )

}






// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}