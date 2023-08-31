const getInput = document.querySelector("#getTaskInput");
const getBtn = document.querySelector("#getTaskBtn")
const task = document.querySelector(".task");

getBtn.addEventListener("click",addTask);
function addTask(){
       const taskText = getInput.value.trim();
        if(taskText === "" ) return;

        const list = document.createElement("li");
        list.innerHTML = `
        <div class="inner">
        <input type="text" id="display" readonly value=${taskText}>
        <button id="edit">edit</button>
        <button id="delete">delete</button>
        </div>
        `
        task.appendChild(list);
        getInput.value="";

        const del = list.querySelector("#delete");
        del.addEventListener("click",()=>{
                
                task.removeChild(list);
        });
        const disInput = list.querySelector("#display");
        const edit = list.querySelector("#edit");
        edit.addEventListener("click",()=>{
                if(edit.innerText.toLowerCase()=="edit"){
                disInput.removeAttribute("readonly");
                disInput.focus();
                edit.innerText = "Save";
                }else{
                        disInput.setAttribute("readonly","readonly");
                        edit.innerText="edit";
                }
        });
        
}



