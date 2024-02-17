import { useState } from "react";

function NewTask({onAdd}){
    const [enteredTask,setEnteredTask]= useState("");

    function handleChange(event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
        if(enteredTask.trim()===""){
            return;
        }
        onAdd(enteredTask)
        setEnteredTask("");

    }

    return <div className="flex items-center justify-between">
        <input
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text"
        value={enteredTask}
        />
        <button
        onClick={handleClick}
        className="text-stone-700 hover:text-red-500">Add Task</button>
    </div>
}
export default NewTask;