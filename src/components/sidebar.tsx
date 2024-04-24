import React from "react";
import { SidebarNavItems } from "../config/sidebar.ts";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col border-r min-h-screen ml-8 mt-[80px] fixed w-[300px]">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
        Todo App
      </h1>
      <div className="flex flex-col ml-8 mt-4 w-[300px]">
        <h4 className="leading-7 [&:not(:first-child)]:mt-6">
          {SidebarNavItems?.map((item, index) => (
            <div key={index}>
              {item.href ? ( 
                <Link href={item.href}>{item.title}</Link>
              ) : (
                <div>{item.title}</div>
              )}
              
            </div>
          ))}
        </h4>
      </div>
    </div>
  );
}
