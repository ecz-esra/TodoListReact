import React,{useState} from 'react';
import './App.css';

function App() {
const[todoText,setTodoText]=useState('')
const[todos,setTodos]=useState([])

const handleSubmit=(event)=>{
event.preventDefault()
if(todoText === ''){
  alert('please type your todo!')
}
if(todoText.length<= 3){
  alert("it isn't valid")
  return
}

console.log(todoText)
const newTodo={
  id:new Date().getTime(),
  title:todoText,
  date:new Date(),
  hasDone:true
}
console.log(newTodo);

setTodos([...todos,newTodo])
setTodoText('')
}

  return (
    <div className="container my-5">
   <form onSubmit={handleSubmit}>
   <div className="input-group mb-3">
  <input type="text" 
  value={todoText}
  onChange={(event)=>{
setTodoText(event.target.value)
  }}
  className="form-control" 
  placeholder="Type your todo" />
  <button className="btn btn-primary w-20" type="submit" >
    ADD</button>
</div >
   </form>
   <div className="container">
       {
      todos.length === 0 ? (
        <p className='text-center'>You don't have any todos</p>
      ) : (
        <>
         {
          todos.map((item,index)=>(
            <div key={index} style={{borderBottom:"1px solid gray"}} className='d-flex justify-content-between align-items-center' >
              <div>
            <h1 style={{textDecoration:item.hasDone === true ? "line-through" : "none"}}  >{item.title}  {""}
           </h1>
           <small>{new Date(item.date).toLocaleDateString()}</small>
            </div>
            <div>
              <button onClick={()=>{
                const filteredTodos=todos.filter(i=> i.id !== item.id)
                setTodos(filteredTodos)
              }} className='btn btn-sm btn-danger' >Delete</button>
              <button className='btn btn-sm btn-secondary' >Edit</button>
              <button className='btn btn-sm btn-success' >{item.hasDone=== false ? "Done" : "Undone"}</button>
            </div>
            </div>
            ))
            }
        </>
      )
    }
   </div>
    </div>
  );
}

export default App;
