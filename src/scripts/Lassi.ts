import { Item } from "../helpers/item";
import { ITEM_LIST_MAP } from "./constants";

export class Lassi implements Item {
  getPrice(): number {
    return ITEM_LIST_MAP.lassi;
  }
}
