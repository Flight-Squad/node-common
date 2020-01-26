import { CreateTransactionFields, CreateTransactionResponse } from './transaction';
export interface Charge {
    /** Public Payment Token from Payment Processor */
    token: string;
    /** Transaction Id */
    txId: string;
}
export interface ChargeCard extends Charge {
}
export interface ChargeBank extends Charge {
    accountId: string;
}
export declare class Pricesquad {
    readonly apiRoot: string;
    constructor(apiRoot: string);
    readonly tx: {
        get: (txId: string) => Promise<any>;
        create: (params: CreateTransactionFields) => Promise<CreateTransactionResponse>;
    };
    readonly charge: {
        card: (params: ChargeCard) => Promise<any>;
        bank: (params: ChargeBank) => Promise<any>;
    };
}
