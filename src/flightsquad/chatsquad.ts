import { CreateTransactionResponse } from "./transaction";
import Axios from "axios";
import { ExtendRouter } from "../router";

export interface PaymentMessageReq {
    /** messaging platform */
    platform: string;
    /** user id */
    id: string;
    payment: CreateTransactionResponse;
}

export class Chatsquad {
    constructor(readonly apiRoot: string) {}
    private static readonly routers = {
        messages: ExtendRouter('/messages'),
    }
    static readonly routes = {
        messages: {
            payment: Chatsquad.routers.messages('/payment'),
        }
    }
    
    send = {
        payment: {
            msg: async (req: PaymentMessageReq): Promise<void> => {await Axios.post(`${this.apiRoot}/${Chatsquad.routes.messages.payment}`, req)}
        }
    }
}