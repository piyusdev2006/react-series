import conf from '../config/conf.js'

import { Client, Account, ID } from "appwrite";

export class AuthService {
    // instance of appwrite client and account
    client = new Client();
    account;

    // kyuki object ko hi export kr rhe h isliye constructor chahiye hoga
    constructor(client, account) {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) { 
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
            
        } catch (error) {
            throw error;
        }
    }

    // check kr rhe hum login hai ki nhi
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);  
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSession();
        }
        catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
    
}

// direct object ko hi export kr rhe kyoki saare methods ko use krna hoga aur ek hi instance chahiye hoga
const authService = new AuthService();

export default authService; 