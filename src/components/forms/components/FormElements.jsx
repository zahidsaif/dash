import React from "react";

export const FormLabelWithInput = ({ label, inputType, inputRegister, errorMessage, className, inputClassName, placeholder = null, defaultValue = null }) => {
    return <div className={className}>
        <label>
            {label}
            <input
                {...inputRegister}
                type={inputType}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={`form-input block mt-2 w-full rounded-xl bg-gray-200 border-0 focus:ring-2 ${inputClassName}`}
            />
            <div className={"text-red-600 text-xs pl-1 mt-1"}>{errorMessage}</div>
        </label>
    </div>
}

export const FormLabelWithCheckbox = ({ className, label, inputRegister, errorMessage }) => {
    return <div className={className}>
        <label>
            <input
                {...inputRegister}
                type={"checkbox"}
                className={`form-checkbox rounded bg-gray-200 border-0 mr-2`}
            />
            <span className={"text-sm"}>{label}</span>
            <div className={"text-red-600 text-xs pl-1 mt-1"}>{errorMessage}</div>
        </label>
    </div>
}

export const FormLabelWithSwitch = ({ label, onSwitchChange, value }) => {
    return <div className={"mt-4"}>
        <label className={"flex justify-between items-center"}>
            {label}
            <div className={"relative inline-block w-[2.8rem] h-[1.15rem]"}>
                <input checked={value} className={"opacity-0 w-0 h-0"} type={"checkbox"} onChange={onSwitchChange} />
                <span className={`round-slider`}></span>
            </div>
        </label>
    </div>
}