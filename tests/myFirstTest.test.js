describe("Number Operations,", () => {
  test(" 1 plus 1 equals to 2", () => {
    let a = 1;
    let b = 1;

    expect(a + b).toBe(2);
  });

  test("5+6 not equals to two", () => {
    let a = 5;
    let b = 6;
    expect(a + b).not.toBe(10);
  });
}); //describes test as a whole

describe("Testing other matcher methods", () => {
  test("Testing undefined", () => {
    let number = undefined;
    expect(number).not.toBeDefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });
});

test("Number comparison", () => {
  const a = 1;
  const b = 2;
  expect(a + b).toBeGreaterThan(2);
  expect(a + b).toBeGreaterThanOrEqual(3);
  expect(a + b).toBeLessThanOrEqual(5);
  expect(a + b).toBeLessThan(10);
});

test("there should be no I in Team", () => {
  let string = "team";
  expect(string).not.toMatch(/I/i);
});

const shoppingList = ["Milk", "Trash bags", "Paper Towels", "Iphones", "PS4"];
test("the shopping list has PS4", () => {
  expect(shoppingList).toContain("PS4");
});

describe("Testing reference equality ", () => {
  const user = {
    name: "Clement",
  };
  user["age"] = 45;

  test("should return a user object with age 45", () => {
    expect(user).toEqual({ name: "Clement", age: 45 });
  });

  test("should return a user with a name and age key", () => {
    expect(user).toEqual(
      //tobe tests numbers, strings etc, so use toequal for object
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  //testing array equality
  test("testing array equality", () => {
    const users = ["clement", "sarah", "jacob"];
    expect(users).toEqual(["clement", "sarah", "jacob"]);
  });
});
