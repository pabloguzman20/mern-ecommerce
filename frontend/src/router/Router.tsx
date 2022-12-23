import React from "react"
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Admin, User, Protector } from "./index";

const Router: React.FC<{}> = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Protector />}>
            <Route path="/user/*" element={<User />} />
        </Route>

        <Route element={<Protector admin />}>
            <Route path="/admin/*" element={<Admin />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
    </Routes>
);

export default Router;