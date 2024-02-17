import noProjectImage from "../../assets/no-projects.png"
function NoProjectSelected(props){
    return<div >
        <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className="mt-8">
            <button onClick={props.onStartAdd} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600">Create New project</button>
        </p>
    </div>
}
export default NoProjectSelected