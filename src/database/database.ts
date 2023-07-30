import { TransactionType } from "../interfaces/TransactionType";
import { AccountType } from "../interfaces/AccountType";

export const transactionTypes : TransactionType[] = [
    {id: 0, name: "Retrait"},
    {id: 1, name: "Dépôt"},
    {id: 2, name: "Transfert"},
];

export const accountTypes : AccountType[] = [
    {id: 1, name: "Orange Money", code: "OM"},
    {id: 2, name: "Wave", code: "WV"},
    {id: 3, name: "Wari", code: "WR"},
    {id: 4, name: "Compte Bancaire", code: "CB"},
];

export const providerColors: any = {
    "OM": "#FF7F50",
    "WV": "#6495ED",
    "WR": "#DE3163",
    "CB": "#2874a6",
}
