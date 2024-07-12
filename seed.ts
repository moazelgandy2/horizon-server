import { faker } from "@faker-js/faker";
import { db } from "./lib/db";

// Specify the number of customers here
const customersNumber = 112; // Adjust this number as per your requirement

const seedDatabase = async (numCustomers: number) => {
  // Generate random customers
  for (let i = 0; i < numCustomers; i++) {
    const customer = await db.customers.create({
      data: {
        name: faker.name.fullName(),
      },
    });

    // Generate random transactions for each customer
    const numberOfTransactions = faker.datatype.number({ min: 4, max: 15 });

    for (let j = 0; j < numberOfTransactions; j++) {
      const transaction = {
        customerId: customer.id,
        date: faker.date.between("2022-01-01", "2024-12-31"),
        amount: faker.datatype.number({ min: 50, max: 20000 }),
      };
      console.log(`Creating transaction: ${j}, for customer: ${i}`);
      await db.transactions.create({
        data: transaction,
      });
    }
  }
};

async function main() {
  try {
    await seedDatabase(customersNumber);
    console.log(`Database seeding completed successfully.`);
  } catch (error) {
    console.error(`Error seeding database: ${error}`);
  } finally {
    console.log(`Closing database connection...`);
  }
}

main();
