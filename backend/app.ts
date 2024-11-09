import express, { Request, Response } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import * as carsData from "./data/cars.json";

const app = express();
var schema = buildSchema(`
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

var resolvers = {
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

export default app;