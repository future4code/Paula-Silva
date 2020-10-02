//criar as horas
const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
for (const d of dias) {
    let container = document.getElementById(d)
    for (let i = 1; i <= 24; i++) {
        container.innerHTML += `<div class="${i} horas"><p>${i}h</p></div>`    
    }      
}

//cria o select
const slcHoras = document.getElementById('slcHoras')
for (let i = 1; i <= 24; i++) {
    if (i===8) {
        slcHoras.innerHTML += `<option value="${i}" selected>${i}h</option>`
    } else {
        slcHoras.innerHTML += `<option value="${i}">${i}h</option>`
    }        
} 

function criaTarefa() {
    let tarefa = document.getElementById('tarefa').value; //Pega a tarefa digitada
    let dia = document.getElementById('dias-semana').value; //Pega o dia escolhido
    let hora = document.getElementById('slcHoras').value;//Pega a hora escolhida
    //Pega a div do dia escolhido
    let container = document.getElementById(dia)
    //verifica se tem texto ou não
    if (tarefa==="") {
        alert("Vc não digitou sua tarefa");
    } else {
        //se tem texto, dentro da div do dia, vai pegar a hora escolhido e dentro dela adicionar a tarefa
        container.getElementsByClassName(hora)[0].innerHTML += `<p onclick="risca(this)" class="tarefa">${tarefa}</p>`
    }
    //apaga depois de inserir
    document.getElementById('tarefa').value = ''
}

function risca(item) {
    item.style.textDecoration = "line-through";
}

function limpaTarefa() {
    let tarefas = document.getElementsByClassName('tarefa')
    for (const e of tarefas) {
        e.innerHTML = '';
    }
}