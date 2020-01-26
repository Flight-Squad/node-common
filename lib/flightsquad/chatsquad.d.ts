import { CreateTransactionResponse } from "./transaction";
export interface PaymentMessageReq {
    /** messaging platform */
    platform: string;
    /** user id */
    id: string;
    payment: CreateTransactionResponse;
}
export declare class Chatsquad {
    readonly apiRoot: string;
    constructor(apiRoot: string);
    private static readonly routers;
    static readonly routes: {
        messages: {
            payment: string;
        };
    };
    send: {
        payment: {
            msg: (req: PaymentMessageReq) => Promise<void>;
        };
    };
}
