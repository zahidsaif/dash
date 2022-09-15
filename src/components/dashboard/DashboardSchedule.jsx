import {dashboardSchedules} from "./extras/dashboardData";
import ScheduleDetails from "./ScheduleDetails";
import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardSchedule = () => {
    return <DashboardCard cardTitle={"Today's schedule"} info={"See All"} buttonText={">"}>
        <div className={"mt-4"}>
            {dashboardSchedules.map(({ id, title, time, location, className }) => <ScheduleDetails key={id} title={title} time={time} location={location} className={className} />)}
        </div>
    </DashboardCard>
}

export default DashboardSchedule