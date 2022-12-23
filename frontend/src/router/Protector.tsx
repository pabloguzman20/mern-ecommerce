import React from "react";
import { Outlet, Navigate } from "react-router-dom";

interface Props {
    admin?: boolean;
};

const Protector: React.FC<Props> = ({ admin }): JSX.Element => {
    let auth = false;

    if (admin) {
        let adminAuth = true;
        if (adminAuth) auth = true;
    } else {
        let userAuth = true;
        if (userAuth) auth = true;
    }
    return auth ? <Outlet /> : <Navigate to={"/login"} />
};

export default Protector;