import React, {useState} from "react";

const UserRecordsHeader = () => {
    const [tableSearchQuery, updateTableSearchQuery] = useState('')
    
    return <div className={"flex justify-between items-center"}>
        <h4 className={"font-bold text-lg"}>User Records</h4>
        
        <div className={"flex items-center"}>
            <input
                value={tableSearchQuery}
                className={"h-9 rounded-xl border-0 bg-gray-100 focus:ring-2"}
                placeholder={"Search in table..."}
                type={"text"}
                onChange={(e) => updateTableSearchQuery(e.target.value)}
            />
            
            <button type={"button"} className={"mx-8 flex items-center text-sm border rounded-xl px-4 py-1 border-gray-400 font-bold text-gray-400"}>
                <img src={"/icons/extras/filter.svg"} className={"mr-1"} alt={"Filter"} />
                Filter
            </button>
            
            <button type={"button"} className={"flex items-center rounded-xl text-white px-4 bg-dash-blue"}>
                <span className={"text-2xl mr-1"}>+</span>
                <span className={"font-bold text-sm"}>Add</span>
            </button>
        </div>
    </div>
}

export default UserRecordsHeader