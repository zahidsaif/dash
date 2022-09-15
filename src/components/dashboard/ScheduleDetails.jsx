import React from "react";

const ScheduleDetails = ({ title, location, time, className }) => {
    return <section className={`border-l-4 py-0.5 ${className}`}>
        <div className={"ml-2.5"}>
            <div className={"font-bold text-sm"}>{title}</div>
            <div className={"text-xs text-gray-500 mt-0.5"}>{time}</div>
            <div className={"text-xs text-gray-500 mt-0.5"}>{location}</div>
        </div>
    </section>
}

export default ScheduleDetails