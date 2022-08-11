import { rest } from "msw";
import { ICar } from "../types/car";
// @ts-ignore
import cars from "./cars";
// @ts-ignore
import colors from "./colors";

let memCars: ICar[] = cars;

export const handlers = [
  rest.get("api/cars", (req, res, ctx) => {
    return res(ctx.json(memCars));
  }),
  rest.get("api/cars/:id", (req, res, ctx) => {
    const { id } = req.params;
    const car = memCars.find((c) => c.id === Number(id));
    return res(ctx.json(car));
  }),
  rest.put("api/cars/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const reqCarObj = await req.json();
    const car = memCars.find((c) => c.id === Number(id));
    if (car) {
      memCars = memCars.map((c) => {
        if (c.id === Number(id)) {
          return { ...c, ...reqCarObj };
        }
        return c;
      });
    }
    return res(ctx.json(memCars.find((c) => c.id === Number(id))));
  }),
  rest.get("api/colors", (req, res, ctx) => {
    return res(ctx.json(colors));
  }),
];
