import serverless from "serverless-http";
import express from "express";

const app = express();

const schema = buildSchema(`
  type Query {
    cars: [Car]
  }
  type Car {
    id: ID,
    make: String,
    model: String,
    year: Int
  }
`)

const resolvers = {
  cars() {
    return carsData.cars
  },
}

app.all(
  "/api",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
)
const handler = serverless(app);
module.exports.handler = async(event,context)=> {
    const result = await handler(event, context);
    return result;
}