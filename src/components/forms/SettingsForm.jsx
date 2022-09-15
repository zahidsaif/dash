import React from "react";

const SettingsForm = ({ children, formTitle }) => {
    return <div className={"bg-white py-6 px-10 rounded-3xl"}>
        <h4 className={"font-bold text-lg"}>{formTitle}</h4>
    
        {children}
    </div>
}

export default SettingsForm