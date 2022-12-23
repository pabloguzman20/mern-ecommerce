import React from "react"
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { Profile, CartDetails, Orders, OrdersDetails } from "../pages/user";

const UserRouter: React.FC<{}> = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart-details" element={<CartDetails />} />
        <Route path="/order-details" element={<OrdersDetails />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
);

export default UserRouter;