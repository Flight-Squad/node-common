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
            get: async (txId) => (await axios_1.default.get(`${this.apiRoot}/${txId}/`)).data,
        };
        this.charge = {
            card: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/card/pay`, params)).data,
            bank: async (params) => (await axios_1.default.post(`${this.apiRoot}/transactions/bank/pay`, params)).data,
        };
    }
}
exports.Pricesquad = Pricesquad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VzcXVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbGlnaHRzcXVhZC9wcmljZXNxdWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBYzFCLE1BQWEsVUFBVTtJQUNuQixZQUFxQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMzQixPQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ2xGLENBQUE7UUFFUSxXQUFNLEdBQUc7WUFDZCxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzVHLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDL0csQ0FBQTtJQVJ1QyxDQUFDO0NBUzVDO0FBVkQsZ0NBVUMifQ==