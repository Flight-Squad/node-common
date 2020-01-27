import { CreateTransactionResponse } from "./transaction";
import { Trip } from "./trip";
export interface PaymentMessageReq {
    /** messaging platform */
    platform: string;
    /** user id */
    id: string;
    payment: CreateTransactionResponse;
    trip: Trip;
}
export interface SendMessageReq {
    /** messaging platform */
    platform: string;
    /** user id */
    id: string;
    /** message to send */
    message: string;
}
export declare class Chatsquad {
    readonly apiRoot: string;
    constructor(apiRoot: string);
    private static readonly routers;
    static readonly routes: {
        messages: {
            msg: string;
            payment: string;
        };
    };
    send: {
        msg: (req: SendMessageReq) => Promise<import("axios").AxiosResponse<any>>;
        payment: (req: PaymentMessageReq) => Promise<void>;
    };
}
