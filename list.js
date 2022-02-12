    
    lista = [];

   function createItem(texto) {
       return {
        texto: texto
       }
   } 


    function addTarefa() {

        var inputItem = document.getElementById("listItem").value;
        lista.push(createItem(inputItem));
        console.log(lista)
       
        let rowId = document.getElementById("rowList");
        let divBody = document.createElement('div');
        let divRow = divBody.appendChild(document.createElement('div'));
        let divTexto = divRow.appendChild(document.createElement('div'));
        let textoConteudo = divTexto.appendChild(document.createElement('h3'));
        let divBtnSuccess = divRow.appendChild(document.createElement('div'));
        let btnSuccess = divBtnSuccess.appendChild(document.createElement('button'));
        let divBtnDanger = divRow.appendChild(document.createElement('div'));
        let btnDanger = divBtnDanger.appendChild(document.createElement('button'));

        divBody.classList.add('container', 'mt-2', 'bg-list', 'p-2', 'shadow-sm', 'rounded', 'border');
        divRow.classList.add('row');
        divTexto.classList.add('col-md-8', 'text-center');
        divBtnSuccess.classList.add('col-sm-2');
        divBtnDanger.classList.add('col-sm-2');
        btnSuccess.classList.add('mb-1', 'form-control', 'btn', 'btn-success');
        btnDanger.classList.add('mb-1', 'form-control', 'btn', 'btn-danger');

        btnDanger.textContent = 'Remove';
        btnSuccess.textContent = 'Done';
        textoConteudo.textContent = inputItem;
        rowId.appendChild(divBody);

        
    }