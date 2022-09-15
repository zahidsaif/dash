import React from "react";

const SettingsCard = ({ cardTitle, className, children }) => {
    return <div className={`flex flex-col bg-white py-6 px-10 rounded-3xl mt-10 ${className}`}>
        <h4 className={"font-bold text-lg"}>{cardTitle}</h4>
        
        {children}
    </div>
}

export default SettingsCard