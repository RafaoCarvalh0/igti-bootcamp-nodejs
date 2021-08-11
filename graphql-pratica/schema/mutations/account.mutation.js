import { GraphQLBoolean, GraphQLInt } from "graphql"
import Account from "../types/Account.js"
import AccountInput from "../types/AccountInput.js"
import AccountService from "../../services/accounts.services.js"

const accountMutation = {
    createAccout:{
        type: Account,
        args:{
            account:{
                name: "account",
                type: AccountInput
            }
        },
        resolve(_, args){
            return AccountService.createAccount(args.account);
        }
    },
    deleteAccount:{
        type: GraphQLBoolean,
        args: {
            id:{
                name: "id",
                type: GraphQLInt
            }
        },
        resolve(_, args){
            AccountService.deleteAccount(args.id);
        }
    },
    updateAccount:{
        type: Account,
        args:{
            account:{
                name: "account",
                type: AccountInput
            }
        },
        resolve(_,args){
            return AccountService.updateAccount(args.account)
        }

    }
}

export default accountMutation