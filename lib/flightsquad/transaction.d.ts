import { Trip } from "./trip";
export declare enum TransactionStatus {
    Created = 0,
    Pending = 1,
    Processed = 2,
    Failed = 3
}
export interface CreateTransactionFields {
    /** Amount to charge in USD */
    amount: number;
    /** customer id */
    customer: string;
    trip: Trip;
}
