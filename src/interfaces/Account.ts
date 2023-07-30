import { Client } from "./Client";

export interface Account {
    account_number: string;
    balance: number;
    accountType: string;
    clientId: number;
    createdAt: string;
    updatedAt: string;
    clients?: Client
}