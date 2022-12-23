import React from "react";
import { Outlet } from "react-router-dom"

const Order: React.FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <h1>Orders</h1>
            <Outlet />
        </div>
    );
};

export default Order;