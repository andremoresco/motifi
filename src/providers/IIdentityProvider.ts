
export interface ICreateIdentityUser {
    name: string;
    email: string;
    password: string;
}

export interface IIdentityUser {
    id: string;
    name: string;
    email: string;
}

export interface IIdentityProvider {

    insert(identityUser: ICreateIdentityUser): Promise<IIdentityUser>;

}