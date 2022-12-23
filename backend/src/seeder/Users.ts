import { hashSync } from "bcryptjs";

export const users = [
    {
        name: 'admin',
        lastName: 'admin',
        email: 'admin@admin.com',
        password: hashSync('admin@admin.com', 10),
        isAdmin: true,
    },
    {
        name: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: hashSync('john@doe.com', 10),
    },
];