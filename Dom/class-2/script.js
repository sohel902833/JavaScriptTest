const form=document.getElementById("form");
const addTaskButton=document.getElementById("addTask");
const newTask=document.getElementById("new-task");
const incompletTaskContainer=document.getElementById("items");
const completeTasks=document.getElementById("completetask")

let taskList=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const task={
        title:newTask.value,
        isComplete:false
    }
    taskList.push(task)
    localStorage.setItem("todos",JSON.stringify(taskList))
    createIncompleteTask(task)
    newTask.value="";
})

generateIncompleteTask=()=>{
    incompletTaskContainer.innerHTML="";
    completeTasks.innerHTML="";
    taskList.map((task,index)=> task?.isComplete?createCompleteTask(task,index):createIncompleteTask(task,index))

}

const createIncompleteTask=(task,index)=>{
         let incompleteTaskItem=document.createElement("li");
         incompleteTaskItem.className="item";
         let checkBox=document.createElement("input");
         let label=document.createElement("label");
         label.innerText=task?.title;
         checkBox.type="checkbox";
         incompleteTaskItem.appendChild(checkBox)
         incompleteTaskItem.appendChild(label)
         incompletTaskContainer.appendChild(incompleteTaskItem);
        let scheckBox=incompleteTaskItem.querySelector('input[type="checkbox"]')
        scheckBox.addEventListener("change",()=>{
           completeTask(index);
        })
}

const createCompleteTask=(task,index)=>{
    const li=document.createElement("li");
    li.className="item";
    const button=document.createElement("button")
    button.className="delete"
    button.innerText="Delete"
    li.append(task?.title,button);
    completeTasks.appendChild(li);
    button.addEventListener("click",()=>{
       taskList.splice(index,1)
       localStorage.setItem("todos",JSON.stringify(taskList))
         generateIncompleteTask();
    })
}

const completeTask=(index)=>{
    taskList[index].isComplete=true; 
    localStorage.setItem("todos",JSON.stringify(taskList))
    generateIncompleteTask();
}

generateIncompleteTask();
