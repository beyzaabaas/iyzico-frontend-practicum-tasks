import { Button, Form} from 'react-bootstrap';
import "./App.css"
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState("")
  

  const addTodo=()=>{
    setTodoList(prevTodoList=>[...prevTodoList, {id:uuidv4(), todo:newTodo, isEditable:false, isCompleted:false}])
    setNewTodo("")
  }

  const completeTodo=(id)=>{
    setTodoList(prevTodoList=>prevTodoList.map(todoItem=>todoItem.id===id?{...todoItem, isCompleted:!todoItem.isCompleted}: todoItem))
  }
  const editTodo=(id, oldTodo)=>{
    setTodoList(prevTodoList=> prevTodoList.map(todoItem=>todoItem.id===id ? {...todoItem, isEditable:!todoItem.isEditable}:todoItem))
    setTodo(oldTodo)
  }
  const saveTodo=(id)=>{
    setTodoList(prevTodoList=> prevTodoList.map(todoItem=>todoItem.id===id ? {...todoItem, isEditable:!todoItem.isEditable, todo: todo}: todoItem))
  }
  const deleteTodo=(id)=>{
    setTodoList(prevTodoList=>prevTodoList.filter(todoItem=>todoItem.id!==id))
  }

  return (
    <div className="todoapp d-flex flex-column justify-content-center align-items-center mt-5 w-50 m-auto">
      <h1 className='fw-semibold'>todos</h1>
       <div className='d-flex w-75 mt-3'>
       <Form.Control
       className='w-75'
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
          
        />
        <Button className='btn ms-5 btn-dark' onClick={addTodo} >Add Todo</Button>
       </div>

       <div className='mt-5  w-75 mb-5'>
        
        {
          todoList.map((todoItem)=> 
          <div key={todoItem.id}  className="d-flex justify-content-between mb-3">
             <div className='d-flex w-75'>
              <Form.Check 
                type={'checkbox'}
                className="me-2"
                value={todoItem.isCompleted}
                onChange={()=>completeTodo(todoItem.id)}
          />
           {
            !todoItem.isEditable ?
              <label className={`${todoItem.isCompleted? "text-decoration-line-through fst-italic fw-lighter": ""}  `  }> {todoItem.todo}</label>
              :
              <Form.Control 
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
          
           />
           }
           
          
           </div>
           <div>
           {
            !todoItem.isEditable ? <Button width={25} height={25} style={{cursor:"pointer"}} className="me-2 btn-sm" onClick={()=>editTodo(todoItem.id, todoItem.todo)}>Edit</Button>
            :
            <Button width={25} height={25} style={{cursor:"pointer"}} className="me-2 btn-sm btn-success" onClick={()=>saveTodo(todoItem.id)}>Save</Button>
            }
            <Button width={25} height={25} style={{cursor:"pointer"}} className="me-2 btn-sm btn-danger" onClick={()=>deleteTodo(todoItem.id)}>Delete</Button>

           </div>
          
            </div>)
        }
        
       </div>
    </div>
  );
}


export default App;
