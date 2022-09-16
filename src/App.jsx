import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/extras/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { UserDataContext } from "./contexts/Contexts";

function App() {
    const [dataFromAPI, setDataFromAPI] = useState([])
    
    useEffect(() => {
        const getAPIData = async () => {
            try {
                const response = await fetch(`https://api.mockaroo.com/api/generate.json?schema=userData&key=${process.env.REACT_APP_API_KEY}`)
                const dataFromAPI = await response.json()
    
                if (response.status === 200) setDataFromAPI(dataFromAPI)
            } catch (error) {
                console.error("The API has a daily limit of 200 requests. If you are not able to see the user data, please try again after some time as the current daily limit has been crossed")
            }
        }
        
        getAPIData()
    }, [])
    
    return <UserDataContext.Provider value={dataFromAPI}>
        <BrowserRouter>
            <Routes>
                <Route path={"*"} element={<ErrorPage />} />
                <Route path={"/"} element={<Navigate to={'/dashboard'} />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/signup"} element={<Signup />} />
                <Route path={"/users"} element={<Users />} />
                <Route path={"/settings"} element={<Settings />} />
            </Routes>
        </BrowserRouter>
    </UserDataContext.Provider>
}

export default App