"use client";
import React from "react";

const Task = () => {
    const [todo, setTodo] = React.useState([
        {
            date: new Date("2024-01-07"),
            id: 1,
            title: "Personal Task",
            description: "Go for a morning jog",
            category: "Personal"
        },
        {
            date: new Date("2024-01-08"),
            id: 2,
            title: "Freelance Task",
            description: "Complete UI design for client project",
            category: "Freelance"
        },
        {
            date: new Date("2024-01-08"),
            id: 3,
            title: "Work Task",
            description: "Prepare presentation for team meeting",
            category: "Work"
        }
    ]);

    return (
       <div className="flex flex-col ml-[450px] mt-[10px]">
           {todo.map(task => (
               <div key={task.id}>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    {task.date.toDateString()}
                </h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>{task.title}</li>
                    <li>{task.description}</li>
                    <li>{task.category}</li>
                </ul>
               </div>
           ))}
       </div>
    );
}

export default Task;
