import { providerColors } from "../database/database";

export function handleAccountSearchClick(accountItem: HTMLElement, senderInput: HTMLInputElement, senderFullname: HTMLInputElement, accountNumberContainer: HTMLElement, senderTitle: HTMLElement) : void {
    accountItem.addEventListener('click', () => {
        const accountNumber = accountItem.querySelector('.account-number') as HTMLElement;
        const clientFullName = accountItem.querySelector('.fullname') as HTMLElement;

        if (/[A-Z]{2}_\d{9}/.test(accountNumber.innerHTML)) {
            senderTitle.style.backgroundColor = providerColors[accountNumber.innerHTML.split("_")[0]];
        }

        senderInput.value = accountNumber.innerHTML;
        senderFullname.value = clientFullName.innerHTML;
        accountNumberContainer.style.display = "none";
    })
}