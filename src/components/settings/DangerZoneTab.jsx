import React from "react";
import SettingsCard from "./SettingsCard";

const DangerZoneTab = () => {
    return <SettingsCard cardTitle={"Danger Zone"} className={"text-red-600"}>
        <button type={"button"} className={"text-center border border-red-600 mt-4 py-2 font-bold rounded-xl hover:bg-red-700 hover:text-white"}>
            Delete My Account
        </button>
    </SettingsCard>
}

export default DangerZoneTab