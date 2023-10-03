
// CSS 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Icons
import { TfiAgenda } from "react-icons/tfi";
//State and compnent import
import { useState } from "react";
import Listitems from "./Components/Listitems";


const  App=()=>{
  const [task, setTask] = useState("");
  const [currentTask, setCurrentTask] = useState([]);
  //Edit And update button state
  const [editId, setEditId]= useState(0)

  //============= Add TASK method==============//

  const addTask = (e) => {
    e.preventDefault();
//UPdate Task  
if(editId){
  const editTask = currentTask.find( (i)=> i.id === editId);
  const updatedTask = currentTask.map((t)=>
      t.id === editTask.id 
      ?(t={id: t.id, task}) 
      : {id:t.id, task:t.task}
  );
  setCurrentTask(updatedTask);
  setEditId(0);
  setTask("");
  return task;
}
//ADD Task  
if(task !== ''){
  setCurrentTask([
    ...currentTask,
    { task: task, id: Date.now(), isCompleted: false },
  ]);
  setTask("");
} 
}; 

// ========== Delete Task================

  const deleteTask = (id) => {
    const newTask = currentTask.filter((e) => {
      return e.id !== id;
    });
    console.log(newTask);
    setCurrentTask(newTask);
    setTask("");
  };

//==============Completed task method=========
  const doneTask = (id) => {    
    //first find the element or task or id
    const element = currentTask.findIndex((elem) => elem.id === id);
    //console.log(element, id)
    //copay of array objects ot set new variable for editing purpose
    const newtask = [...currentTask];
    //Edit our task in particular element
    newtask[element] = {
      ...newtask[element],
      isCompleted: true,
    };
    //then updated to settasklist
    setCurrentTask(newtask);
  };

 // ===========Handle Edit Action ==========
  const handleEdit=(id)=>{
    const editTask = currentTask.find( (i)=> i.id === id);
    setTask(editTask.task);
    setEditId(id);    
  }
  return (
    <div className="bg_image">
      <header className="header bg-dark ">
        <h1>Todo App</h1>
      </header>
      <section className="container">
        <form className="form-center" onSubmit={addTask} autoComplete="off">
          <div className="mb-3 mt-3 ">
            <label className="form-label fw-bold">Add Todo</label>
            <input 
              value={task} name='newName'
              onChange={(e) => setTask(e.target.value)}
              type="text"
              className="form-control form-control-lg"
              minlength="4"
              placeholder="Enter Todo"
              required />
            <button type="submit"className="btn btn-lg btn-warning mt-3 mbt-3 w-100 fw-bold">
              <TfiAgenda /> {editId? " UPDATE TASK ":  "ADD TASK"}
            </button>
          </div>
        </form>
      </section>
     
   <Listitems doneTask={doneTask} deleteTask={deleteTask} handleEdit={handleEdit}currentTask={currentTask}/> 
             
    </div>
  );
}

export default App;
