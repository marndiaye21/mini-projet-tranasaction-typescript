import { createElement } from "./create-element";

export function createAccountSearchItem(accountNumber: string, clientName: string): HTMLElement {
    const accountSearchItem = createElement("div", {
        class: "flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-blue-400"
    });

    const fullname = createElement("span", { class: "font-semibold fullname" }, clientName);
    const numberAccount = createElement("span", { class: "text-gray-100/20 account-number" }, accountNumber);

    accountSearchItem.append(fullname, numberAccount);

    return accountSearchItem;
}