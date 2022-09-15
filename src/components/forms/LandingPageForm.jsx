import React from "react";
import SocialButton from "../buttons/SocialButton";
import {Link} from "react-router-dom";

const LandingPageForm = ({ formProps, children }) => {
    return <div style={{minWidth: '20rem'}}>
        <h1 className={"font-bold text-2xl"}>{formProps.formHeading}</h1>
        <div>{formProps.formDescription}</div>
    
        <div className={"flex flex-col sm:flex-row sm:justify-between mt-2"}>
            <SocialButton brandLogoSrc={'/icons/brand-logos/Google.svg'} alt={"Google Logo"} buttonText={formProps.googleButtonText}/>
            <SocialButton brandLogoSrc={'/icons/brand-logos/Apple.svg'} alt={"Apple Logo"} buttonText={formProps.appleButtonText}/>
        </div>
    
        {children}
    
        <div className={"text-center text-gray-500 mt-4 text-sm"}>
            {formProps.formRedirectText}
            <Link className={"text-link"} to={formProps.formRedirectTo}> {formProps.formRedirectLinkTitle}</Link>
        </div>
    </div>
}

export default LandingPageForm