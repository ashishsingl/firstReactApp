import React, { useState } from 'react'
import TodoTask from './TodoTask'

const ToDoList = () =>{
    
    //Defining localStorage
    if (localStorage.getItem('todoList') === null){
        localStorage.setItem("todoList", JSON.stringify([]))
    }

    let preTodoList = JSON.parse(localStorage.getItem('todoList'))


    const [newTodo , setTodo] = useState("")
    const [todoList, setTodoList] = useState(preTodoList)


    // Calling when input field update
    const getTodo = (event) =>{
        setTodo(event.target.value);
    }

    let updateList;
    // Calling when add button clicks
    const updateTodoList = (event) =>{
        event.preventDefault();
        updateList = [...todoList, newTodo]
        setTodoList(()=>[...todoList, newTodo])
        localStorage.setItem("todoList", JSON.stringify([...todoList, newTodo]))
        console.log('this is a todolist ',JSON.parse(localStorage.getItem('todoList')))
        setTodo("")
    }
    
    // Calling when tasks is deleting !!!!!!!!!!!!!problem pending in localStorage !!!!!!!!!!!!!
    const deleteTask = (task) =>{
        console.log('before delete', preTodoList)
        let id = preTodoList.indexOf(task)
        updateList = preTodoList.splice(id,1)
        localStorage.setItem("todoList", JSON.stringify(updateList))
        console.log('after delete',preTodoList)
        setTodoList(todoList.filter((eventArr)=>{
            return task !== eventArr;
        }))
        console.log('this code is working',preTodoList)
    }

    return(
        <>
            <h1 className="main-heading">Todo List</h1>
            <form onSubmit = {updateTodoList}>
                <div className="enter-task">
                    <input type="text" placeholder="Enter a task" onChange={getTodo} value={newTodo} required/>
                    <button type="submit">Add Task</button>
                </div>
            </form>
            <div className="task-container">
                <TodoTask todoList = {todoList} deleteTask = {deleteTask} />
            </div>
        </>
    )

}

export default ToDoList;