//console.log("hola");

const toDoInput = document.getElementById("toDoInput");
const addButton = document.getElementById("addButton");
const toDoItems = []
const toDoList = document.querySelector(".toDoList");
//console.log(toDoList);
addButton.addEventListener("click", function(){
    //console.log("agregando tarea");
    toDoItems.push(`<li class="toDoItemContainer">${toDoInput.value}
    <div class="buttonContainer">
        <button id="check">Check</button>
        <button id="delete">Delete</button>
    </div>
    
</li>`);
    toDoInput.value = "";
    console.log(toDoItems);
    toDoList.innerHTML = toDoItems 
})


