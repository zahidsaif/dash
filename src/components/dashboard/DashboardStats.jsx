import {dashboardStats} from "./extras/dashboardData";
import StatsCard from "./StatsCard";
import React from "react";

const DashboardStats = () => {
    return <section className={"flex justify-between mt-8"}>
        {
            dashboardStats.map(({ id, title, stats, logoSrc, className }) => <StatsCard key={id} className={className} title={title} stats={stats} logo={logoSrc} />)
        }
    </section>
}

export default DashboardStats