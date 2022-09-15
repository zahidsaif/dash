import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {activitiesData} from "./extras/dashboardData";
import React from "react";
import ChartLegend from "./ChartLegend";

const DashboardActivitiesChart = () => {
    const chartUserColor = '#9BDD7C'
    const chartGuestColor = '#E9A0A0'
    
    return <section className={"mt-10 bg-white py-6 px-8 rounded-3xl"}>
        <h4 className={"font-bold text-lg"}>Activities</h4>
    
        <div className={"flex justify-between items-center"}>
            <span className={"text-xs text-gray-500"}>May - June 2021 v</span>
            
            <div className={"flex"}>
                <ChartLegend legend={"Guest"} color={chartGuestColor} className={"mr-8"} />
                <ChartLegend legend={"User"} color={chartUserColor} />
            </div>
        </div>
    
        <div className={"mt-6"}>
            <ResponsiveContainer width={"100%"} aspect={3}>
                <LineChart data={activitiesData}>
                    <XAxis dataKey={"name"} tick={<CustomXAxisTick />} />
                    <YAxis width={40} />
                
                    <CartesianGrid stroke={"#eee"} strokeDasharray={"0 0"} />
                
                    <Line type={"monotone"} dataKey={"user"} stroke={chartUserColor} dot={false} strokeWidth={3} />
                    <Line type={"monotone"} dataKey={"guest"} stroke={chartGuestColor} dot={false} strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </section>
}

const CustomXAxisTick = ({ x, y, payload }) => {
    return <g transform={`translate(${x}, ${y})`}>
        <text x={120} y={20} textAnchor={"middle"} fontSize={12}>
            {payload.value}
        </text>
    </g>
}

export default DashboardActivitiesChart