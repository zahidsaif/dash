import React from "react";
import MainPageWrapper from "../components/layout/MainPageWrapper";
import UserRecordsPagination from "../components/users/UserRecordsPagination";
import UserRecordsHeader from "../components/users/UserRecordsHeader";
import UserRecordsTable from "../components/users/UserRecordsTable";

const Users = () => {
    
    
    return <MainPageWrapper pageTitle={"Users"}>
        <div className={"mt-8 p-8 bg-white rounded-2xl"}>
            <UserRecordsHeader />
            <UserRecordsTable />
            <UserRecordsPagination />
        </div>
    </MainPageWrapper>
}

export default Users