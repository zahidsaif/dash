import React from "react";
import MainPageWrapper from "../components/layout/MainPageWrapper";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardActivitiesChart from "../components/dashboard/DashboardActivitiesChart";
import DashboardProductsChart from "../components/dashboard/DashboardProductsChart";
import DashboardSchedule from "../components/dashboard/DashboardSchedule";

const Dashboard = () => {
    return <MainPageWrapper pageTitle={"Dashboard"}>
        <DashboardStats />
        <DashboardActivitiesChart />
        
        <section className={"mt-10 flex justify-between"}>
            <DashboardProductsChart />
            <DashboardSchedule />
        </section>
    </MainPageWrapper>
}

export default Dashboard