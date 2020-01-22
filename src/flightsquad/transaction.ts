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
}