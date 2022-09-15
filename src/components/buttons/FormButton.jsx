import React from "react";

const FormButton = ({ buttonText, className }) => {
    return <button type={"submit"} className={`text-center py-2 rounded-xl text-white font-bold text-sm ${className}`}>
        {buttonText}
    </button>
}

export default FormButton