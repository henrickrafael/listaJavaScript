 
   function createItem(titulo, descricao, data) {
       return {
        titulo: titulo,
        descricao: descricao,
        data: data
       }
   } 

   function formClear() {
       document.getElementById("taskForm").reset();
   }

   function changeDate(data) {

        let stringDate = data;
        let splitDate = stringDate.split('-');
        let invertDate = splitDate.reverse();
        let addDate = invertDate[0] + '/' + invertDate[1] + '/' + invertDate[2];
        
        return addDate;
   }

    /*
        A função abaixa irá verificar se a tarefa já pasosu ou não do prazo para realização da tarefa. 
        Se for o caso, da data irá aprecer vermelha, caso contrário irá fica na cor verde.
        Ainda não está 100% funcionando, por isso a mantive comentada
    */ 

//    function checkDate(data) {

//         let dateNow = new Date().toJSON().slice(0,10);    

//         if(data >= dateNow) {
//             document.querySelector(".deadline").style.color = 'green';
//             console.log(`Hoje é dia ${dateNow} e o dia selecionado foi ${data} -> Maior ou Igual`);
//         } else {
//             document.querySelector(".deadline").style.color = 'red';
//             console.log(`Hoje é dia ${dateNow} e o dia selecionado foi ${data} -> Menor`);
//         }

//    }

    function addTarefa() {

        let taskName = document.getElementById("taskName").value;
        let taskDesc = document.getElementById("taskDesc").value;
        let taskDate = document.getElementById("taskDate").value;

        let formatDate = changeDate(taskDate);

        createItem(taskName, taskDesc, taskDate);
        let style = ['container-fluid', 'bg-list', 'mt-2', 'p-2', 'mb-1'];

        let item = document.createElement('div');
        let taskList = document.getElementById('listItem');

        //Coloquei este laço de repetição apenas para testar se seria possível adicionar classes dinamicamente 
        for(let i = 0; i < style.length; i++) {
            item.classList.add(style[i]);
        }

        let header = document.createElement('h3');
        let taskText = document.createElement('textarea');
        let deadline = document.createElement('span');

        deadline.classList.add('deadline');

        taskText.classList.add('form-control', 'mb-2');
        taskText.setAttribute('readonly', true);

        header.innerText = taskName;
        taskText.innerText = taskDesc;
        deadline.innerText = `Expira em: ${formatDate}`;

        item.appendChild(header);
        item.appendChild(taskText);
        item.appendChild(deadline);
        taskList.appendChild(item);

        //checkDate(taskDate);
        formClear();
        
        
    }

    