import React, {useState} from "react";
import {FormLabelWithSwitch} from "../forms/components/FormElements";
import SettingsCard from "./SettingsCard";

const SecurityTab = () => {
    const [isActive, setIsActive] = useState(true)
    const onSwitchChange = (e) => setIsActive(e.target.checked)
    
    return <SettingsCard cardTitle={"Security"}>
        <FormLabelWithSwitch label={"2-Step Verification"} value={isActive} onSwitchChange={onSwitchChange} />
    </SettingsCard>
}

export default SecurityTab