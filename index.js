//console.log("hola");

const toDoInput = document.getElementById("toDoInput");
const addButton = document.getElementById("addButton");
let toDoItems = []
const toDoList = document.querySelector(".toDoList");
let deleteButtons  ;
//console.log(toDoList);
function renderToDos(){
    toDoInput.value = "";
    // console.log(toDoItems);
     toDoList.innerHTML = toDoItems
     deleteButtons = document.querySelectorAll("#delete") 
     
     for (let i=0; i<deleteButtons.length; i++) {
         deleteButtons[i].addEventListener("click", function(){
             //console.log("itemDeleted");
             console.log(toDoItems);
             toDoItems=toDoItems.filter( function(toDo, index){
                 return toDo[i]!== toDo[index]
             })
             renderToDos();
         })
     }
}

function addItems () {
 //console.log("agregando tarea");
 toDoItems.push(`<li class="toDoItemContainer">${toDoInput.value}
 <div class="buttonContainer">
     <button id="check">Check</button>
     <button id="delete">Delete</button>
 </div>
 
</li>`);
}

function deleteItems() {

deleteButtons = document.querySelectorAll("#delete") 

console.log(deleteButtons);

for (let i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function(){
        //console.log("itemDeleted");
        console.log(toDoItems);
        toDoItems=toDoItems.filter( function(toDo, index){
            return toDo[i]!== toDo[index]
        })
        renderToDos();
    })
}
    
}
addButton.addEventListener("click", function(){
    
    addItems();
    renderToDos()  
    deleteItems();
})


