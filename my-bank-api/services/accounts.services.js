import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function createAccount(account){
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

async function getAccounts(account){
    const data = JSON.parse(await readFile(fileName));
    delete data.nextId;
    return data;
}

async function getAccount(id){
    const data = JSON.parse(await readFile(fileName));
    const account = data.accounts.find(
        account => account.id == id);
    return account;
}

async function deleteAccount(id){
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


async function updateBalance(account){
    const data = JSON.parse(await readFile(fileName));
    const index = data.accounts.findIndex(
        a => a.id === account.id
    );

    if (index === -1) {
        throw new Error("Data not found");
    }

    data.accounts[index].balance = account.balance;
    await writeFile(fileName, JSON.stringify(data));
    return 200;
}

export default{
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount,
    updateBalance
}

