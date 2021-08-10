import express from "express";
import { promises as fs } from "fs";


const { readFile, writeFile } = fs;

const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        let account = req.body;

        if (!account.name || account.balance == null) {
            throw new Error("Name and Baance are needed");
        }

        const data = JSON.parse(await readFile(fileName));

        account = {
            id: data.nextId++,
            name: account.name,
            balance: account.balance
        };
        data.accounts.push(account);

        await writeFile(fileName, JSON.stringify(data, null, 2));

        res.send(account);

        logger.info(`POST /account - ${JSON.stringify(account)}`)
    } catch (err) {
        next(err);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));
        delete data.nextId;
        res.send(data);
        logger.info("GET /account");
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));
        const account = data.accounts.find(
            account => account.id == req.params.id);
        res.send(account);
        logger.info("GET /account/:id");
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));
        data.accounts = data.accounts.filter(
            account => account.id !== parseInt(req.params.id));
        await writeFile(fileName, JSON.stringify(data, null, 2));
        res.end();
        logger.info(`DELETE /account/:id - ${req.params.id}`);
    } catch (err) {
        next(err);
    }
});

router.put("/", async (req, res, next) => {
    try {
        const account = req.body;

        if (!account.id || !account.name || account.balance == null) {
            throw new Error("ID, Name and Baance are needed");
        }

        const data = JSON.parse(await readFile(fileName));
        const index = data.accounts.findIndex(
            a => a.id === account.id
        );

        if (index === -1) {
            throw new Error("Data not found");
        }

        data.accounts[index] = account;

        await writeFile(fileName, JSON.stringify(data));

        res.send(account);
        logger.info(`PUT /account - ${JSON.stringify(account)}`)
    } catch (err) {
        next(err);
    }
});

router.patch("/updateBalance", async (req, res, next) => {
    try {
        const account = req.body;

        if (!account.id || account.balance == null) {
            throw new Error("ID and Baance are needed");
        }

        const data = JSON.parse(await readFile(fileName));
        const index = data.accounts.findIndex(
            a => a.id === account.id
        );

        if (index === -1) {
            throw new Error("Data not found");
        }

        data.accounts[index].balance = account.balance;

        await writeFile(fileName, JSON.stringify(data));

        res.send(data.accounts[index]);
        logger.info(`PATCH /account/updateBalance - ${JSON.stringify(account)}`)
    } catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} ${err.message}`);
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;