"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const db_1 = require("./lib/db");
// Specify the number of customers here
const customersNumber = 112; // Adjust this number as per your requirement
const seedDatabase = (numCustomers) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate random customers
    for (let i = 0; i < numCustomers; i++) {
        const customer = yield db_1.db.customers.create({
            data: {
                name: faker_1.faker.name.fullName(),
            },
        });
        // Generate random transactions for each customer
        const numberOfTransactions = faker_1.faker.datatype.number({ min: 4, max: 15 });
        for (let j = 0; j < numberOfTransactions; j++) {
            const transaction = {
                customerId: customer.id,
                date: faker_1.faker.date.between("2022-01-01", "2024-12-31"),
                amount: faker_1.faker.datatype.number({ min: 50, max: 20000 }),
            };
            console.log(`Creating transaction: ${j}, for customer: ${i}`);
            yield db_1.db.transactions.create({
                data: transaction,
            });
        }
    }
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield seedDatabase(customersNumber);
            console.log(`Database seeding completed successfully.`);
        }
        catch (error) {
            console.error(`Error seeding database: ${error}`);
        }
        finally {
            console.log(`Closing database connection...`);
        }
    });
}
main();
