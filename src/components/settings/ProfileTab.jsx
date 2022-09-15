import FormButton from "../buttons/FormButton";
import SettingsForm from "../forms/SettingsForm";
import React from "react";
import {FormLabelWithInput} from "../forms/components/FormElements";

const ProfileTab = ({ userData }) => {
    return <SettingsForm formTitle={"Profile"}>
        <form className={"2xl:flex"} onSubmit={(e) => e.preventDefault()}>
            <div className={"mt-6 flex flex-col items-center 2xl:mr-8 2xl:mt-5"}>
                <img className={"rounded-full bg-gray-200"} src={userData?.userAvatar} alt={userData?.firstName} />
                <button type={"button"} className={"text-xs border border-black p-1 px-2 rounded-md font-bold mt-3 hover:bg-black hover:text-white"}>Change</button>
            </div>
        
            <div>
                <div className={"flex"}>
                    <FormLabelWithInput label={"First Name"} inputType={"text"} className={"mt-4 mr-4"} defaultValue={userData?.firstName} />
                    <FormLabelWithInput label={"Last Name"} inputType={"text"} className={"mt-4"} defaultValue={userData?.lastName} />
                </div>
            
                <FormLabelWithInput label={"Date of Birth"} inputType={"date"} defaultValue={"1996-02-28"} className={"mt-5"} />
                <FormLabelWithInput label={"Phone Number"} inputType={"tel"} defaultValue={userData?.phone} className={"mt-5"} />
                <FormLabelWithInput label={"Address"} inputType={"text"} defaultValue={userData?.address} className={"mt-5"} />
            
                <div className={"text-right"}>
                    <FormButton buttonText={"Save"} className={"bg-light-blue mt-8 px-8 hover:bg-sky-700"} />
                </div>
            </div>
        </form>
    </SettingsForm>
}

export default ProfileTab