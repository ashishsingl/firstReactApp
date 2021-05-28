import React from 'react'

const Task = ({task,id, deleteTask}) =>{

    return (
        <>
            <div className="task-box">
                <p className="task">{task}</p>
                <button className="delete-btn" onClick={()=>deleteTask(task)}>X</button>
            </div>
        </>
    )
}

export default Task;