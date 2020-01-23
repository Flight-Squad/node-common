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
    trip: Omit<Trip, 'provider'>;
}