import React from "react"
import { Route, Routes } from "react-router-dom";
import Users from "../pages/admin/Users";
import ErrorPage from "../pages/ErrorPage";
import Protector from "./Protector";

const AdminRouter: React.FC<{}> = (): JSX.Element => (
    <Routes>
        <Route element={<Protector admin={false} />}>
            <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
);

export default AdminRouter;