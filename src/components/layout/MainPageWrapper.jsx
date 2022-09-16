import React, {useContext, useState} from "react";
import Navbar from "./Navbar";
import { UserDataContext } from "../../contexts/Contexts";

const MainPageWrapper = ({ children, pageTitle }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const userData = useContext(UserDataContext)
    const userImage = userData[0]?.userAvatar
    
    return <main className={"p-8 flex 2xl:container 2xl:mx-auto"}>
        <Navbar />
    
        <section className={"ml-14 w-screen"}>
            <header className={"mt-4 flex justify-between items-center"}>
                <h1 className={"font-bold text-2xl"}>{pageTitle}</h1>
            
                <div>
                    <input
                        value={searchQuery}
                        className={"h-9 rounded-xl border-0 focus:ring-2 shadow-sm"}
                        placeholder={"Search..."}
                        type={"text"}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                
                    <button className={"mx-8"} type={"button"}>
                        <img src={"/icons/extras/notify.svg"} className={"inline"} alt={"Notifications"} />
                    </button>
                
                    <button type={"button"}>
                        <img src={userImage} className={"rounded-full w-10 inline bg-gray-200"} alt={"User"} />
                    </button>
                </div>
            </header>
        
            {children}
        </section>
    </main>
}

export default MainPageWrapper