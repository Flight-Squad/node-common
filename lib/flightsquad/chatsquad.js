"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const router_1 = require("../router");
class Chatsquad {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
        this.send = {
            msg: (req) => axios_1.default.post(`${this.apiRoot}${Chatsquad.routes.messages.msg}`, req),
            payment: async (req) => {
                await axios_1.default.post(`${this.apiRoot}${Chatsquad.routes.messages.payment}`, req);
            }
        };
    }
}
exports.Chatsquad = Chatsquad;
Chatsquad.routers = {
    send: {
        messages: router_1.ExtendRouter("/send/messages")
    }
};
Chatsquad.routes = {
    messages: {
        msg: Chatsquad.routers.send.messages("/"),
        payment: Chatsquad.routers.send.messages("/payment")
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHNxdWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZsaWdodHNxdWFkL2NoYXRzcXVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQixzQ0FBeUM7QUFzQnpDLE1BQWEsU0FBUztJQUNwQixZQUFxQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWFwQyxTQUFJLEdBQUc7WUFDTCxHQUFHLEVBQUUsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FDM0IsZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBc0IsRUFBaUIsRUFBRTtnQkFDdkQsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUNkLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFDckQsR0FBRyxDQUNKLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztJQXRCcUMsQ0FBQzs7QUFEMUMsOEJBd0JDO0FBdEJ5QixpQkFBTyxHQUFHO0lBQ2hDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxxQkFBWSxDQUFDLGdCQUFnQixDQUFDO0tBQ3pDO0NBQ0YsQ0FBQztBQUNjLGdCQUFNLEdBQUc7SUFDdkIsUUFBUSxFQUFFO1FBQ1IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDekMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7S0FDckQ7Q0FDRixDQUFDIn0=