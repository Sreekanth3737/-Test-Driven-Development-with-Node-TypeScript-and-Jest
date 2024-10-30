import { Apple } from "../services/Apple";
import { Lassi } from "../scripts/Lassi";
import { Yogurt } from "../services/Yogurt";

export interface Item {
  getPrice(): number;
}

export function itemFactory(itemChar: string): Item {
  if (itemChar === "apple") return new Apple();
  if (itemChar === "yogurt") return new Yogurt();
  if (itemChar === "lassi") return new Lassi();
  throw new Error("unknown item");
}

export enum ItemType {
  apple = "apple",
  yogurt = "yogurt",
  lassi = "lassi",
}
