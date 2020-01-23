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
            get: async (txId) => (await axios_1.default.get(`${this.apiRoot}//transactions/${txId}`)).data,
            create: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/`, params)).data,
        };
        this.charge = {
            card: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/card/pay`, params)).data,
            bank: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/bank/pay`, params)).data,
        };
    }
}
exports.Pricesquad = Pricesquad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VzcXVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbGlnaHRzcXVhZC9wcmljZXNxdWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBZTFCLE1BQWEsVUFBVTtJQUNuQixZQUFxQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMzQixPQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDNUYsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUErQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUN0SCxDQUFBO1FBRVEsV0FBTSxHQUFHO1lBQ2QsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM1RyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQy9HLENBQUE7SUFUdUMsQ0FBQztDQVU1QztBQVhELGdDQVdDIn0=