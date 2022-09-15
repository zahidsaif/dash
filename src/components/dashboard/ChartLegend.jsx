import React from "react";

const ChartLegend = ({ legend, value, color, legendClassName, className }) => {
    return <div className={`flex ${className}`}>
        <div className={"rounded-full w-2.5 h-2.5 mr-2 mt-1.5"} style={{backgroundColor: color}}></div>
        <div>
            <h6 className={`text-sm ${legendClassName}`}>{legend}</h6>
            {value ? <p className={"text-xs"}>{value}%</p> : null}
        </div>
    </div>
}

export default ChartLegend