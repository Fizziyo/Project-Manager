import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";
import NewProject from "./Components/NewProject/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject/SelectedProject";
function App() {
  const [projectsState,setProjectsState]=useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  })

  function handleAddTask(text){
    setProjectsState(prevState=>{
      const taskId=Math.random()
      const newTask ={
        text:text,
        projectId:prevState.selectedProjectId,
        id: taskId
      }
      return{
        ...prevState,
        tasks:[newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter(
          (task)=>
           task.id!==id
        ),
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id,
      }
    })
  }
  function handleStartAddPrroject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>
           project.id!==prevState.selectedProjectId
        )
      }
    })
  }

  function handleCancelAddPrroject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }
  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const projectId=Math.random()
      const newProject ={
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  const selectedProject = projectsState.projects.find(project=>project.id===projectsState.selectedProjectId)

  let content=<SelectedProject project={selectedProject} 
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
    />;

  if(projectsState.selectedProjectId===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddPrroject}/>
  }
  else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected  onStartAdd={handleStartAddPrroject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
     <Sidebar onStartAdd={handleStartAddPrroject}
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
