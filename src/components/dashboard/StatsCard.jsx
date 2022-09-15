import React from "react";

const StatsCard = ({ title, stats, logo, className }) => {
    return <div className={`p-6 w-full rounded-2xl ${className}`}>
        <img src={logo} alt={title} className={"float-right"} />
        
        <div className={"mt-10"}>
            <p className={"text-sm"}>{title}</p>
            <h2 className={"number-font-style text-xl xl:text-2xl"}>{stats}</h2>
        </div>
    </div>
}

export default StatsCard