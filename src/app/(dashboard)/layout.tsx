import React from "react";
import Sidebar from "../../components/sidebar.tsx";
import Avatar from "../../components/avatar.tsx";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Avatar />
            <Sidebar />
            <div>
                {children}
            </div>
        </>
    );
}

export default Layout;
