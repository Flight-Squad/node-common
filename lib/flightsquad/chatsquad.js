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
            msg: (req) => axios_1.default.post(`${this.apiRoot}/${Chatsquad.routes.messages.msg}`, req),
            payment: async (req) => { await axios_1.default.post(`${this.apiRoot}/${Chatsquad.routes.messages.payment}`, req); }
        };
    }
}
exports.Chatsquad = Chatsquad;
Chatsquad.routers = {
    send: {
        messages: router_1.ExtendRouter('/send/messages')
    }
};
Chatsquad.routes = {
    messages: {
        msg: Chatsquad.routers.send.messages('/'),
        payment: Chatsquad.routers.send.messages('/payment'),
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHNxdWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZsaWdodHNxdWFkL2NoYXRzcXVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQixzQ0FBeUM7QUFzQnpDLE1BQWEsU0FBUztJQUNsQixZQUFxQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWFwQyxTQUFJLEdBQUc7WUFDSCxHQUFHLEVBQUUsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDakcsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFzQixFQUFpQixFQUFFLEdBQUUsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUM7U0FDNUksQ0FBQTtJQWhCc0MsQ0FBQzs7QUFENUMsOEJBa0JDO0FBaEIyQixpQkFBTyxHQUFHO0lBQzlCLElBQUksRUFBRTtRQUNGLFFBQVEsRUFBRSxxQkFBWSxDQUFDLGdCQUFnQixDQUFDO0tBQzNDO0NBQ0osQ0FBQTtBQUNlLGdCQUFNLEdBQUc7SUFDckIsUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDekMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7S0FDdkQ7Q0FDSixDQUFBIn0=