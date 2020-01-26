"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Pricesquad {
    constructor(apiRoot) {
        this.apiRoot = apiRoot;
        this.tx = {
            get: async (txId) => (await axios_1.default.get(`${this.apiRoot}/transactions/${txId}`)).data,
            create: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/`, params)).data,
        };
        this.charge = {
            card: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/card/pay`, params)).data,
            bank: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/bank/pay`, params)).data,
        };
    }
}
exports.Pricesquad = Pricesquad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VzcXVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbGlnaHRzcXVhZC9wcmljZXNxdWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBZTFCLE1BQWEsVUFBVTtJQUNuQixZQUFxQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUUzQixPQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDM0YsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUErQixFQUFFLEVBQUUsQ0FBRSxDQUFDLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBa0M7U0FDckosQ0FBQTtRQUVRLFdBQU0sR0FBRztZQUNkLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDNUcsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMvRyxDQUFBO0lBVnNDLENBQUM7Q0FXM0M7QUFaRCxnQ0FZQyJ9