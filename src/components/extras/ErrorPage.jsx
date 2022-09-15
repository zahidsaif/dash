import React from "react";

const ErrorPage = () => {
    return <main className={"flex flex-col justify-center items-center h-screen"}>
        <div className={"number-font-style text-3xl text-red-600"}>404</div>
        <div className={"text-xl mt-2 text-red-600"}>Page does not exist!</div>
    </main>
}

export default ErrorPage