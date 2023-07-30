export interface Transaction {
    id: number;
    amount: number;
    type: string;
    phoneReceiver: string;
    clientId: number;
    datetime: string;
    code?: string;
    accountType: string;
}