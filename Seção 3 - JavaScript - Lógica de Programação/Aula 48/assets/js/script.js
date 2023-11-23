const Elements = {
    inputTask : window.document.querySelector('#input-task'),
    btnAddTask : window.document.querySelector('#btn-add'),
    listTask : window.document.querySelector('#list-task'),

    cleanInputTask : function(){
        Elements.inputTask.value = '';
        //Deixa o curso dentro do input
        Elements.inputTask.focus();
    },

    createElement : function(e){
        return window.document.createElement(e);
    },

    createButtonCleanTask : function(li){
        const button = Elements.createElement('button');
        button.innerText = 'Delete';
        button.setAttribute('class', 'delet');
        li.appendChild(button);
    },
}

const LocalStore = {
    saveTasksLocalStore : function(){
        //Pega todos os li criados (task = tarefas)
        const tasks = Elements.listTask.querySelectorAll('li');
        const arrayTasks = [];

        for(let i of tasks){
            let taskText = i.innerText;
            //Tira o delete e com o trim() todos os espaços em brancos
            taskText = taskText.replace('Delete', '').trim();
            arrayTasks.push(taskText);
        }

        //JSON.stringify é um método em JavaScript que converte um objeto ou valor JavaScript em uma string JSON (JavaScript Object Notation).
        const taskJSON = JSON.stringify(arrayTasks);
        //Salvar no localStorage
        localStorage.setItem('task', taskJSON);
    },

    loadTaskLocalStore : function(){
        const task = localStorage.getItem('task');
        const arrayTasks = JSON.parse(task);
        
        for(let i of arrayTasks){
            addTask(i);
        }
    },
}

Elements.inputTask.addEventListener('keypress', function(e){
   if(e.keyCode === 13){
    if(Elements.inputTask.value !== ''){
        addTask(Elements.inputTask.value);
    }
   }
});

window.document.addEventListener('click', function(e){
    if(e.target.classList.contains('delet')){
        //Remove o pai desse elemento
        e.target.parentElement.remove();
        LocalStore.saveTasksLocalStore();
    }

    if(e.target.id == 'btn-add'){
        if(Elements.inputTask.value !== ''){
            addTask(Elements.inputTask.value);
        }
    }
});

function addTask(task){
    const li = Elements.createElement('li');
    li.innerText = `${task} `;
    
    Elements.listTask.appendChild(li);
    Elements.createButtonCleanTask(li);
    Elements.cleanInputTask();

    LocalStore.saveTasksLocalStore();
}

LocalStore.loadTaskLocalStore();