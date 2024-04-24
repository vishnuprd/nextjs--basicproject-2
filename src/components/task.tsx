"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Task() {
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

    const [value, setValue] = React.useState('');
    const [showList, setShowList] = React.useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddInput = () => {
        const currentDate = new Date();
        const newTodo = {
            id: Date.now(),
            description: value,
            createdAt: currentDate
        };
        setTodo([...todo, newTodo]);
        setValue('');
        setShowList(true);
    };

    console.log("todo", todo);

    return (
        <div className="flex flex-col ml-[450px] mt-[10px] w-[600px] rounded-lg">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">
                Today Main Focus
            </h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Design Team Meeting
            </h2>
            <div className="mt-[50px]">
                <Input type="text" value={value} onChange={handleChange} placeholder="What is your next task?" />
                <Button onClick={handleAddInput} className="mt-[10px] ml-[250px]">Add Item</Button>
            </div>
            {showList && (
                <div>
                    {todo.map(task => (
                        <div key={task.id}>
                            {task.date && (
                                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                    {task.date.toDateString()}
                                </h2>
                            )}
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                <li>{task.title}</li>
                                <li>{task.description}</li>
                                <li>{task.category}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
