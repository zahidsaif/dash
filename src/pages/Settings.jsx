import React, {useContext} from "react";
import MainPageWrapper from "../components/layout/MainPageWrapper";
import {UserDataContext} from "../contexts/Contexts";
import ProfileTab from "../components/settings/ProfileTab";
import AccountTab from "../components/settings/AccountTab";
import SecurityTab from "../components/settings/SecurityTab";
import DangerZoneTab from "../components/settings/DangerZoneTab";

const Settings = () => {
    const allUsersData = useContext(UserDataContext)
    const userData = allUsersData[0]
    
    return <MainPageWrapper pageTitle={"Settings"}>
        <section className={"flex justify-between mt-8"}>
            <aside className={"mr-10 w-7/12"}>
                <ProfileTab userData={userData} />
            </aside>
            
            <aside className={"w-5/12"}>
                <AccountTab userData={userData} />
                <SecurityTab />
                <DangerZoneTab />
            </aside>
        </section>
    </MainPageWrapper>
}

export default Settings