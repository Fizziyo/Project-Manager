import NewTask from "../NewTask/NewTask"

function Tasks({onAdd,onDelete,tasks}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
       <NewTask  onAdd={onAdd}/>
       {tasks.length===0 &&
        (<p className="text-stone-800 my-4">This project doesnot have any task</p>)}
       {tasks.length>0 && <ul>
        {tasks.map((task)=><li
            className="flex justify-between my-4"
            key={task.id}>
        <span>{task.text}</span>
        <button 
        onClick={()=>onDelete(task.id)}
        className="text-stone-700 hover:text-red-500">Clear</button>
        </li>)}
        </ul>}
    </section>
}
export default Tasks