import { Item } from "../helpers/item";
import { ITEM_LIST_MAP } from "../scripts/constants";

export class Yogurt implements Item {
  getPrice(): number {
    return ITEM_LIST_MAP.yogurt;
  }
}
