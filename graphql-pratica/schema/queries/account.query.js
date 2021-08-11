import { GraphQLList } from "graphql";
import Account from "../types/Account.js"
import AccountService from "../../services/accounts.services.js"

const accountQueries = {
    getAccounts: {
        type: new GraphQLList(Account),
        resolve: () => AccountService.getAccounts()
    } 
};

export default accountQueries;