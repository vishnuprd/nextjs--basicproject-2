import React from "react";
import {
    Avatar as UserAvatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

export default function AvatarComponent({ file }) { 
    return (
        <div className="flex flex-row items-center mt-4 ml-8 fixed">
            <UserAvatar>
                <AvatarImage src="" alt="profile image"/>
                <AvatarFallback>VD</AvatarFallback>
            </UserAvatar>
            <div className="ml-4">
                <p className="text-sm font-semibold">Vishnuprasad</p>
                <p className="text-xs text-gray-600">Vishnuravichandran.28@gmail.com</p>
            </div>
        </div>
    );
}
