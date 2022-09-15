import React from "react";

const SocialButton = ({ brandLogoSrc, alt, buttonText }) => {
    return <button className={`flex justify-center items-center bg-white rounded-xl py-3.5 shadow pl-2.5 mt-2.5 sm:py-1.5 sm:px-2 sm:shadow-none`}>
        <img src={brandLogoSrc} alt={alt} className={"w-4 sm:w-3"} />
        <span className={"pl-2 text-xs text-gray-500"}>{buttonText}</span>
    </button>
}

export default SocialButton