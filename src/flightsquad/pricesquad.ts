import Axios from 'axios';
import { CreateTransactionFields, CreateTransactionResponse } from './transaction';

export interface Charge {
    /** Public Payment Token from Payment Processor */
    token: string;
    /** Transaction Id */
    txId: string;
 }

 export interface ChargeCard extends Charge {}
 export interface ChargeBank extends Charge {
     accountId: string;
 }

export class Pricesquad {
    constructor(readonly apiRoot: string) {}

    readonly tx = {
        get: async (txId: string) => (await Axios.get(`${this.apiRoot}/transactions/${txId}`)).data,
        create: async (params: CreateTransactionFields) => ((await Axios.post(`${this.apiRoot}/transactions/`, params)).data as CreateTransactionResponse),
    }

    readonly charge = {
        card: async (params: ChargeCard) => (await Axios.post(`${this.apiRoot}/transactions/card/pay`, params)).data,
        bank: async (params: ChargeBank) => (await Axios.post(`${this.apiRoot}/transactions/bank/pay`, params)).data,
    }
}
