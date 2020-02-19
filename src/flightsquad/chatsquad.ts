import { CreateTransactionResponse } from "./transaction";
import Axios from "axios";
import { ExtendRouter } from "../router";
import { Trip, TripGroupQuery } from "./trip";

export interface PaymentMessageReq {
  /** messaging platform */
  platform: string;
  /** user id */
  id: string;
  payment: CreateTransactionResponse;
  trip: Trip;
  query: TripGroupQuery;
}

export interface SendMessageReq {
  /** messaging platform */
  platform: string;
  /** user id */
  id: string;
  /** message to send */
  message: string;
}

export class Chatsquad {
  constructor(readonly apiRoot: string) {}
  private static readonly routers = {
    send: {
      messages: ExtendRouter("/send/messages")
    }
  };
  static readonly routes = {
    messages: {
      msg: Chatsquad.routers.send.messages("/"),
      payment: Chatsquad.routers.send.messages("/payment")
    }
  };

  send = {
    msg: (req: SendMessageReq) =>
      Axios.post(`${this.apiRoot}${Chatsquad.routes.messages.msg}`, req),
    payment: async (req: PaymentMessageReq): Promise<void> => {
      await Axios.post(
        `${this.apiRoot}${Chatsquad.routes.messages.payment}`,
        req
      );
    }
  };
}
