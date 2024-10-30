import { Discount } from "../src/services/Discount";
import { Store } from "../src/services/Store";
import { ItemType } from "../src/helpers/item";

const testCases = [
  { item: "apple", expected: 200 },
  { item: "yogurt", expected: 30 },
  { item: "lassi", expected: 50 },
];

describe("checkout test", () => {
  const discountApple = new Discount(ItemType.apple, 3, 20);
  const discountLassi = new Discount(ItemType.lassi, 5, 10);
  const discountList = [discountApple, discountLassi];
  const store = new Store(discountList);
  it("should return 0 when no items are sent", () => {
    expect(store.checkout("")).toBe(0);
  });

  testCases.forEach(({ item, expected }) => {
    it(`should return ${expected} when sending "${item}"`, () => {
      expect(store.checkout(item)).toBe(expected);
    });
  });
  it("should throw error if the item is not available", () => {
    expect(() => store.checkout("whiskey")).toThrow("unknown item");
  });
  it("should apply a discount when having oats", () => {
    expect(store.checkout("apple")).toBe(200);
  });
});
