import React from 'react';
import Task from './Task';

const TodoTask = ({todoList, deleteTask}) =>{
    return (
            todoList.map((task,index )=><Task 
                                            task = {task} key = {index}
                                            id={index} deleteTask = {deleteTask}
                                            />)
            )
}

export default TodoTask;