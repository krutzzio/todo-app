/* eslint-disable react/prop-types */


export function Tasca({ task, deleteTask, ind }) {

    const color = task.color
    const taskText = task.task

    const dynamicStyle = {
        backgroundColor: color,
    }

    return (
        <div style={dynamicStyle} className="flex justify-between p-4 rounded-lg text-black font-bold">
            {taskText}
            <button onClick={() => deleteTask(ind)}>X</button>
        </div>
    )
}
