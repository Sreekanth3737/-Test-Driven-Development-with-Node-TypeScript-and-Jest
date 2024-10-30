import { Discount } from "./Discount";
import { itemFactory } from "../helpers/item";

export class Store {
  constructor(private discountList: Discount[]) {}

  checkout(itemList: string): number {
    let total = this.calculateTotal(itemList);
    let discount = this.calculateDiscount(itemList);
    return total - discount;
  }

  private calculateDiscount(itemList: string): number {
    let totalDiscount = 0;
    for (const discount of this.discountList) {
      totalDiscount += discount.calculateDiscount(itemList);
    }
    return totalDiscount;
  }

  private calculateTotal(itemList: string): number {
    let total = 0;
    for (let itemChar of itemList.split(",")) {
      if (!itemChar) return 0;
      const item = itemFactory(itemChar);
      total += item.getPrice();
    }
    return total;
  }
}
