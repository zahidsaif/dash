import {FormLabelWithInput} from "../forms/components/FormElements";
import FormButton from "../buttons/FormButton";
import SettingsForm from "../forms/SettingsForm";
import React from "react";

const AccountTab = ({ userData }) => {
    return <SettingsForm formTitle={"Account"}>
        <form onSubmit={(e) => e.preventDefault()}>
            <FormLabelWithInput label={"Email address"} inputType={"email"} defaultValue={userData?.email} className={"mt-5"} />
            <FormLabelWithInput label={"Current Password"} inputType={"password"} defaultValue={userData?.password} className={"mt-5"} />
            <FormLabelWithInput label={"New Password"} inputType={"password"} placeholder={"Enter new password"} className={"mt-5"} />
        
            <div className={"text-right"}>
                <FormButton buttonText={"Save"} className={"bg-light-blue mt-8 w-auto px-8 hover:bg-sky-700"} />
            </div>
        </form>
    </SettingsForm>
}

export default AccountTab