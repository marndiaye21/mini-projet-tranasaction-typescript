import { transactionTypes, accountTypes } from "./database/database";
import { loadAccountTypes, loadSearchedAccounts, loadTransactionTypes } from "./helpers/utils";

const senderControl = {
    senderInput: document.querySelector('#sender') as HTMLInputElement,
    senderFullname: document.querySelector('#sender-fullname') as HTMLInputElement,
    accountNumberContainer: document.querySelector("#account-number-container") as HTMLDivElement,
    senderTitle: document.querySelector('#sender-title') as HTMLElement
}

const senderInput = document.querySelector('#sender') as HTMLInputElement;
const receiverInput = document.querySelector('#receiver') as HTMLInputElement;

const senderTitle = document.querySelector('#sender-title') as HTMLElement
const receiverTitle = document.querySelector('#receiver-title') as HTMLElement;

const senderFullname = document.querySelector('#sender-fullname') as HTMLInputElement;
const receiverFullname = document.querySelector('#receiver-fullname') as HTMLInputElement

const accountNumberContainer = document.querySelector("#account-number-container") as HTMLDivElement;
const receiverAccountNumberContainer = document.querySelector('#receiver-account-number-container') as HTMLElement;

const amountError = document.querySelector('.amount-error') as HTMLDivElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;
const accountProvider = document.querySelector("#account-provider") as HTMLSelectElement;
const typeTransaction = document.querySelector('#type-transaction') as HTMLSelectElement;

const receiverContainer = document.querySelector('#receiver-container') as HTMLElement

amountInput?.addEventListener('input', function () {
    if (this.value === "") {
        amountError?.classList.remove("hidden")
        return;
    }

    amountError?.classList.add("hidden")
})

senderInput?.addEventListener('input', function () {
    if (!this.value) {
        accountNumberContainer.style.display = "none";
        return;
    }

    loadSearchedAccounts(this.value, accountNumberContainer, senderInput, senderFullname, senderTitle);
});

receiverInput?.addEventListener('input', function () {
    if (!this.value) {
        receiverAccountNumberContainer.classList.add('hidden');
        return;
    }

    loadSearchedAccounts(this.value, receiverAccountNumberContainer, this, receiverFullname, receiverTitle)
})

typeTransaction.addEventListener('change', function() {
    const transactionTypeId = this.selectedOptions[0].getAttribute('data-id');

    if (transactionTypeId && +transactionTypeId === 0) {
        console.log(transactionTypeId);
        receiverContainer.classList.add('hidden');
        return;
    }

    receiverContainer.classList.remove('hidden');
})

window.addEventListener('load', () => {
    loadTransactionTypes(transactionTypes, typeTransaction);
    loadAccountTypes(accountTypes, accountProvider);
})

