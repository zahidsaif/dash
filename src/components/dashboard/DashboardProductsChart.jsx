import {Cell, Pie, PieChart} from "recharts";
import {productsData} from "./extras/dashboardData";
import React from "react";
import DashboardCard from "./DashboardCard";
import ChartLegend from "./ChartLegend";

const DashboardProductsChart = () => {
    return <DashboardCard cardTitle={"Top products"} buttonText={"v"} info={"May - June 2021"} className={"mr-10"}>
        <div className={"mt-4 flex items-center justify-center"}>
            <PieChart width={150} height={150}>
                <Pie dataKey={"value"} data={productsData} outerRadius={70} cx={"50%"} cy={"50%"}>
                    {productsData.map(({ id, color }) => <Cell key={id} fill={color} />)}
                </Pie>
            </PieChart>
        
            <div className={"ml-8"}>
                {productsData.map(({ id, name, value, color, className, legendClassName }) => <ChartLegend key={id} className={className} legend={name} legendClassName={legendClassName} value={value} color={color} />)}
            </div>
        </div>
    </DashboardCard>
}

export default DashboardProductsChart