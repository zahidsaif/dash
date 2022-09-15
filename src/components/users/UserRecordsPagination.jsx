import React from "react";

const UserRecordsPagination = () => {
    return <div className={"flex justify-end mt-8"}>
        <TablePaginationButton className={"mr-2"}>
            <img src={"/icons/extras/arrowLeft.svg"} alt={""} />
        </TablePaginationButton>
        
        <TablePaginationButton className={"mr-2 bg-gray-200"}>1</TablePaginationButton>
        <TablePaginationButton className={"mr-2"}>2</TablePaginationButton>
        <TablePaginationButton className={"mr-2"}>3</TablePaginationButton>
        <TablePaginationButton className={"mr-2"}>4</TablePaginationButton>
        
        <TablePaginationButton>
            <img src={"/icons/extras/arrowRight.svg"} alt={""} className={"mt-0.5"} />
        </TablePaginationButton>
    </div>
}

const TablePaginationButton = ({ children, className }) => {
    return <button type={"button"} className={`border rounded-lg text-xs py-1.5 px-2.5 ${className}`}>
        {children}
    </button>
}

export default UserRecordsPagination