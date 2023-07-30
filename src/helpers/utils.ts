import { createAccountSearchItem } from "../components/account-search-item-component";
import { createElement } from "../components/create-element";
import { Account } from "../interfaces/Account";
import { AccountType } from "../interfaces/AccountType";
import { TransactionType } from "../interfaces/TransactionType";
import { getAccountsWithOwner } from "../services/AccountService";
import { handleAccountSearchClick } from "./event-handler";

export function loadTransactionTypes(transactionTypes: TransactionType[], typeTransaction: HTMLSelectElement) {
    for (const transactionType of transactionTypes) {
        const option = createElement("option", { "data-id": transactionType.id }, transactionType.name);
        typeTransaction.appendChild(option);
    }
}

export async function loadAccountTypes(accountTypes: AccountType[], accountProvider: HTMLSelectElement) {
    for (const accountType of accountTypes) {
        const accountsTypeItem = createElement("option", {"data-id": accountType.id, "data-code": accountType.code}, accountType.name)
        accountProvider.appendChild(accountsTypeItem)
    }
}

export async function loadSearchedAccounts(searchAccount: string, accountNumberContainer: HTMLElement, senderInput:HTMLInputElement, senderFullname:HTMLInputElement, senderTitle: HTMLElement) {
    const accounts: Account[] = await getAccountsWithOwner(searchAccount);

    accountNumberContainer.innerHTML = "";
    accountNumberContainer.style.display = "block";

    for (const account of accounts) {
        if (account.clients) {
            const accountItem = createAccountSearchItem(account.account_number, account.clients.fullname);
            handleAccountSearchClick(accountItem, senderInput, senderFullname, accountNumberContainer, senderTitle);
            accountNumberContainer?.appendChild(accountItem);
        }
    }
}
