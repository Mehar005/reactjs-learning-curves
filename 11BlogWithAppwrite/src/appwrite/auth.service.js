import { Client, Account, ID } from "appwrite";

import { config } from "../config/config";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password }) {
    try {
      return await this.account.create(ID.unique(), email, password);
    } catch (error) {
      console.log("Appwrite Error :: createAccount :: error ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite Error :: login :: error ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Error :: getCurrentUser :: error ", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Error :: logout :: error ", error);
    }
  }
}

const authService = new AuthService();

export default authService;