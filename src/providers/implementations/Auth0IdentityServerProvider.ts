import { ICreateIdentityUser, IIdentityProvider, IIdentityUser } from "../IIdentityProvider";
import axios, { AxiosInstance } from 'axios';

export class Auth0IdentityServerProvider implements IIdentityProvider {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.IDENTITY_PROVIDER_URL,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    async insert(identityUser: ICreateIdentityUser): Promise<IIdentityUser> {
        
        return await this.api.post('dbconnections/signup', {
            client_id: process.env.IDENTITY_PROVIDER_CLIENT_ID,
            email: identityUser.email,
            password: identityUser.password,
            connection: process.env.IDENTITY_PROVIDER_CONNECTION_NAME,
            name: identityUser.name
        })
        .then((response) => {
            const { _id, name, email } = response.data;
            return { id: _id, name: name, email: email };

        }).catch((err) => {
            console.log(err)
            throw new Error("Error to insert a new user on Auth0 IdentityProvider. " + err);

        })
    }

}