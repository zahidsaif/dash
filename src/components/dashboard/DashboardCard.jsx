import React from "react";

const DashboardCard = ({ cardTitle, className, buttonText, children, info }) => {
    return <div className={`w-1/2 bg-white py-6 px-8 rounded-3xl ${className}`}>
        <div className={"flex items-center justify-between"}>
            <h4 className={"font-bold text-lg"}>{cardTitle}</h4>
            
            <div>
                <span className={"text-xs text-gray-500"}>{info}</span>
                <button type={"button"} className={"ml-1 text-xs"}>
                    {buttonText}
                </button>
            </div>
        </div>
        
        {children}
    </div>
}

export default DashboardCard