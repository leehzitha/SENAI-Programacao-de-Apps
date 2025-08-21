

const addTask = () =>  {
    let tarefa = document.getElementById('text').value;
    
    if (!tarefa.trim()){
        alert('Você precisar dar um nome para sua tarefa!')
        return;
    }
    
    let novatarefa = document.createElement('p');
    novatarefa.className = 'textoTarefa';
    novatarefa.textContent = tarefa;
    let divtarefa = document.createElement('div');
    divtarefa.className = 'tarefa';
   
    divtarefa.appendChild(novatarefa);
    let botao = document.createElement('button');
    botao.className = 'complete';
    botao.textContent = 'Concluir'
    botao.onclick = completeTask;
    divtarefa.appendChild(botao);
    document.getElementById('tasks').appendChild(divtarefa);
    document.getElementById('text').value = '';

}

const completeTask = (event) => {
    let botao = event.target;
    let div = botao.parentElement;
    div.remove();

};




