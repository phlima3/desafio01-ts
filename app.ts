import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(2, "ph", 69);
console.log(peopleAccount);
peopleAccount.deposit(30);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(50);
console.log(companyAccount);
