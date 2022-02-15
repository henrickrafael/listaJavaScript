    
    lista = [];

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
        lista.push(createItem(taskName, taskDesc, taskDate));
        console.log(lista)

        
    }