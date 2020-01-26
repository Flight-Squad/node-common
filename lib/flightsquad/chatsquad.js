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
            payment: {
                msg: async (req) => { await axios_1.default.post(`${this.apiRoot}/${Chatsquad.routes.messages.payment}`, req); }
            }
        };
    }
}
exports.Chatsquad = Chatsquad;
Chatsquad.routers = {
    messages: router_1.ExtendRouter('/messages'),
};
Chatsquad.routes = {
    messages: {
        payment: Chatsquad.routers.messages('/payment'),
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHNxdWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZsaWdodHNxdWFkL2NoYXRzcXVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQixzQ0FBeUM7QUFVekMsTUFBYSxTQUFTO0lBQ2xCLFlBQXFCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBVXBDLFNBQUksR0FBRztZQUNILE9BQU8sRUFBRTtnQkFDTCxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQXNCLEVBQWlCLEVBQUUsR0FBRSxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQzthQUN4STtTQUNKLENBQUE7SUFkc0MsQ0FBQzs7QUFENUMsOEJBZ0JDO0FBZDJCLGlCQUFPLEdBQUc7SUFDOUIsUUFBUSxFQUFFLHFCQUFZLENBQUMsV0FBVyxDQUFDO0NBQ3RDLENBQUE7QUFDZSxnQkFBTSxHQUFHO0lBQ3JCLFFBQVEsRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7S0FDbEQ7Q0FDSixDQUFBIn0=