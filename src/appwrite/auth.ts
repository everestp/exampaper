import conf from '@/conf/conf';
import { Client, Account, ID } from 'appwrite';

// Define interfaces for type safety
interface CreateAccountParams {
  email: string;
  password: string;
  name: string;
}

interface LoginParams {
  email: string;
  password: string;
}
 class AuthService {
  private client: Client;
  private account: Account;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }: CreateAccountParams): Promise<any> {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginParams): Promise<any> {
    try {
      const response = await this.account.createEmailPasswordSession(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(): Promise<any | null> {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("DEBug Appwrite getUser error", error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("DEBug Appwrite logout", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;