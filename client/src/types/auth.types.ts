export type User = {
    firstName: string;
    lastName: string;
    email: string;
    roles: UserRole;
}

export type UserRole = {
    isAdmin: boolean,
}
