"use client";
import Image from "next/image";
import React from "react";
import Sidebar from "../components/sidebar.tsx";
import Avatar from "../components/avatar.tsx";
import Task from "../components/task.tsx";
// import Scheduletask from "../components/scheduletask.tsx";
export default function Home({handleUpdateTodo,todo}) {

  return (
    <>
        <div>
            {/* <Scheduletask handleUpdateTodo={handleUpdateTodo}  todos={todo}/> */}
            <Avatar />
            <Sidebar />
            <Task />
        </div>
 

    </>
  );
}
