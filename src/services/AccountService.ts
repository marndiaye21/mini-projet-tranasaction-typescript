import { Account } from "../interfaces/Account";
import { fetchData } from "./fetch";

const accountsUrl = 'http://localhost:8000/api/accounts';

export async function getAccounts() : Promise<Account[]> {
    const response = await fetchData<{}, Account[]>(accountsUrl);
    return response;
}

export async function getAccountsWithOwner(search: string) : Promise<Account[]> {
    const response = await fetchData<{}, Account[]>(accountsUrl + "/" + search);
    return response;
}

export async function getAccountTypes<T>() : Promise<T[]> {
    const response = await fetchData<{}, T[]>(accountsUrl + "?only=account_type");
    return response;
}
