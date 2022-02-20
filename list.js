
   function createItem(titulo, descricao, data) {
       return {
        titulo: titulo,
        descricao: descricao,
        data: data
       }
   } 


    function addTarefa() {

        var taskName = document.getElementById("taskName").value;
        var taskDesc = document.getElementById("taskDesc").value;
        var taskDate = document.getElementById("taskDate").value;

        createItem(taskName, taskDesc, taskDate);
        

        let item = document.createElement('div');
        let taskList = document.getElementById('listItem');
        item.classList.add('container-fluid', 'bg-list', 'mt-2', 'p-2', 'mb-1');

        let header = document.createElement('h3');
        let taskText = document.createElement('textarea');
        let deadline = document.createElement('span');
        taskText.classList.add('readonly', 'form-control', 'mb-2');

        header.innerText = taskName;
        taskText.innerText = taskDesc;
        deadline.innerText = `Expira em: ${taskDate}`;

        item.appendChild(header);
        item.appendChild(taskText);
        item.appendChild(deadline);
        taskList.appendChild(item);

        
    }

  