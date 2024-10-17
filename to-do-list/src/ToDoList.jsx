import React, {useState} from "react"

function ToDoList(){

    const [task, setTask] = useState(["work", "run", "play"]);
    const [newTask, setNewTask] = useState([]);


    function handleChange(){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTask(t =>[...t, newTask]);
            setNewTask("")
        }
    }
    
    function deleteTask(index){
        const updatedTask = task.filter((_,i) => i !== index);
        setTask(updatedTask);
    }

    function moveUp(index){
        if (index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    function moveDown(index){
        if (index < task.length){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }
    

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input placeholder="enter a task" value={newTask} onChange={handleChange}/>
                <div className="operations">
                    <button className="add-button" onClick={addTask}>Add Task</button>
                </div>
            </div>
            <ol>
                {task.map((tasks, index)=><li key={index}>
                    <span className="text">{tasks}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>❌</button>
                    <button className="move-button" onClick={()=>moveUp(index)}>⬆️</button>
                    <button className="move-button" onClick={()=>moveDown(index)}>⬇️</button>
                </li>)}
            </ol>
        </div>
    )
}

export default ToDoList