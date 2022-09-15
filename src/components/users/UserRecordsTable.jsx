import React, {useContext} from "react";
import {UserDataContext} from "../../contexts/Contexts";
import UserRecord from "./UserRecord";

const UserRecordsTable = () => {
    const userData = useContext(UserDataContext)
    
    return <>
        {
            userData.slice(0, 8).map(({ id, email, firstName, lastName, gender, userAvatar }) => <UserRecord key={id} userImage={userAvatar} fullName={`${firstName} ${lastName}`} email={email} gender={gender} />)
        }
    </>
}

export default UserRecordsTable