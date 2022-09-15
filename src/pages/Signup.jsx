import React from "react";
import LandingPageWrapper from "../components/layout/LandingPageWrapper";
import {SignupFormProps} from "../components/forms/extras/formProps";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {SignupFormSchema} from "../components/forms/extras/schemas";
import LandingPageForm from "../components/forms/LandingPageForm";
import {FormLabelWithCheckbox, FormLabelWithInput} from "../components/forms/components/FormElements";
import FormButton from "../components/buttons/FormButton";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupFormSchema)
    })
    
    const onFormSubmit = (data) => console.log(data)
    
    return <LandingPageWrapper>
        <LandingPageForm formProps={SignupFormProps}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"mt-5 bg-white rounded-xl p-7"}>
                <div className={"sm:flex items-center"}>
                    <FormLabelWithInput
                        inputClassName={"sm:w-11/12"}
                        inputRegister={register("firstName")}
                        label={"First Name"}
                        inputType={"text"}
                        placeholder={"Enter your first name"}
                        errorMessage={errors.firstName?.message}
                    />
    
                    <FormLabelWithInput
                        inputClassName={"sm:w-11/12"}
                        className={"mt-4 sm:mt-0"}
                        inputRegister={register("lastName")}
                        label={"Last Name"}
                        inputType={"text"}
                        placeholder={"Enter your last name"}
                        errorMessage={errors.lastName?.message}
                    />
                </div>
    
                <FormLabelWithInput
                    className={"mt-4"}
                    inputRegister={register("emailAddress")}
                    label={"Email address"}
                    inputType={"email"}
                    placeholder={"Enter your email"}
                    errorMessage={errors.emailAddress?.message}
                />
    
                <FormLabelWithInput
                    className={"mt-4"}
                    inputRegister={register("password")}
                    label={"Password"}
                    inputType={"password"}
                    placeholder={"Enter your password"}
                    errorMessage={errors.password?.message}
                />
    
                <FormLabelWithInput
                    className={"mt-4"}
                    inputRegister={register("confirmPassword")}
                    label={"Confirm Password"}
                    inputType={"password"}
                    placeholder={"Re-enter your password"}
                    errorMessage={errors.confirmPassword?.message}
                />
    
                <FormLabelWithCheckbox
                    className={"mt-4"}
                    inputRegister={register("termsAndConditions")}
                    label={"I agree to the terms and conditions"}
                    errorMessage={errors.termsAndConditions?.message}
                />
    
                <FormButton buttonText={"Sign In"} className={"mt-4 w-full bg-dash-blue hover:bg-sky-600"} />
            </form>
        </LandingPageForm>
    </LandingPageWrapper>
}

export default Signup