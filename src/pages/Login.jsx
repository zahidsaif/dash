import React from "react";
import LandingPageWrapper from "../components/layout/LandingPageWrapper";
import {LoginFormProps} from "../components/forms/extras/formProps";
import LandingPageForm from "../components/forms/LandingPageForm";
import {FormLabelWithInput} from "../components/forms/components/FormElements";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import FormButton from "../components/buttons/FormButton";
import {LoginFormSchema} from "../components/forms/extras/schemas";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginFormSchema)
    })
    
    const onFormSubmit = (data) => console.log(data)
    
    return <LandingPageWrapper>
        <LandingPageForm formProps={LoginFormProps}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"mt-5 bg-white rounded-xl p-7"}>
                <FormLabelWithInput
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
        
                <div className={"mt-4"}>
                    <Link className={"text-link text-sm"} to={'/login'}>Forgot password?</Link>
                </div>
        
                <FormButton buttonText={"Sign In"} className={"mt-4 w-full bg-dash-blue hover:bg-sky-600"} />
            </form>
        </LandingPageForm>
    </LandingPageWrapper>
}

export default Login