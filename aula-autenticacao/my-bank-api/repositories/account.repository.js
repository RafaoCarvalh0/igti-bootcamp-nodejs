import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getAccounts() {
    const data = JSON.parse(await readFile(fileName));
    return data.accounts;
}

async function getAccount(id) {
    const accounts = await getAccounts();
    const account = accounts.find(
        account => account.id == id);

    if (account){
        return account;
    }else{
    throw new Error("Data not found");
    }
}

async function insertAccount(account) {
    const data = JSON.parse(await readFile(fileName));

    account = {
        id: data.nextId++,
        name: account.name,
        balance: account.balance
    };
    data.accounts.push(account);

    await writeFile(fileName, JSON.stringify(data, null, 2));

    return account;
}

async function deleteAccount(id) {
    const data = JSON.parse(await readFile(fileName));
    data.accounts = data.accounts.filter(
        account => account.id !== parseInt(id));
    await writeFile(fileName, JSON.stringify(data, null, 2));
}

async function updateAccount(account){
    const data = JSON.parse(await readFile(fileName));
    const index = data.accounts.findIndex(
        a => a.id === account.id
    );

    if (index === -1) {
        throw new Error("Data not found");
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;
    await writeFile(fileName, JSON.stringify(data));
    return data.accounts[index];
}


export default {
    getAccounts,
    insertAccount,
    getAccount,
    deleteAccount,
    updateAccount
}