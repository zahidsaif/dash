import React from "react";

const UserRecord = ({ userImage, fullName, email, gender }) => {
    return <div className={"py-3 px-8 bg-gray-300/50 mt-6 rounded-xl text-sm grid grid-cols-8 items-center"}>
        <img src={userImage} alt={fullName} className={"w-10 inline rounded-full bg-gray-400 col-span-1"} />
        <div className={"break-words col-span-2"}>{fullName}</div>
        <div className={"col-span-3"}>{email}</div>
        <div className={"col-span-1"}>{gender}</div>
        <div className={"col-span-1"}>User</div>
    </div>
}

export default UserRecord