import { Trip } from "./trip";

export enum TransactionStatus {
    Created,
    Pending,
    Processed,
    Failed,
}

export interface CreateTransactionFields {
    /** Amount to charge in USD */
    amount: number;
    /** customer id */
    customer: string;
    trip: Trip;
}

export interface CreateTransactionResponse {
    transaction;
    /** url for payment page */
    url: string;
}