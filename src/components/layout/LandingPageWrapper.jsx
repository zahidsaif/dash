import React from "react";

const LandingPageWrapper = ({ children }) => {
    return <main className={"bg-gray-100 flex flex-col h-screen md:flex-row"}>
        <aside className={"bg-dash-blue w-full pl-4 py-3 md:flex md:justify-center md:items-center md:min-h-full md:w-2/5 md:pl-0 md:py-0"}>
            <h1 className={"text-white text-6xl font-bold md:text-7xl"}>Dash.</h1>
        </aside>
    
        <section className={"flex flex-col justify-center items-center h-screen md:w-3/5"}>
            {children}
        </section>
    </main>
}

export default LandingPageWrapper