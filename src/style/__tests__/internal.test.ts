import Style from "../internal";

test("toString works", () => {
  const style = new Style({
    backgroundColor: "red",
    fontSize: "12px",
  });
  const expected =
    "{\n" + `  background-color: red;` + "\n" + `  font-size: 12px;` + "\n}";

  expect(style.formattedString()).toBe(expected);
});

test("addProperty works", () => {
  const style = new Style();
  style.addProperty("backgroundColor", "red");
  const expected = "{\n" + `  background-color: red;` + "\n}";
  expect(style.formattedString()).toBe(expected);
});

test("chaning addProperty methods works", () => {
  const style = new Style();
  style.addProperty("color", "blue").addProperty("fontSize", "12px");
  const expected =
    "{\n" + `  color: blue;` + "\n" + `  font-size: 12px;` + "\n}";
  expect(style.formattedString()).toBe(expected);
});

test("addStyle works", () => {
  const style1 = new Style({
    borderRadius: "0px",
    backgroundColor: "red",
    margin: "400px",
  });
  const style2 = new Style({
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  });
  const style3 = style1.addStyle(style2);
  const expected =
    "{\n" +
    `  border-radius: 10px;` +
    "\n" +
    `  background-color: red;` +
    "\n" +
    `  margin: 10px;` +
    "\n" +
    `  padding: 10px;` +
    "\n}";
  expect(style3.formattedString()).toBe(expected);
});

test("addStyle with empty starter Map works", () => {
  const style1 = new Style();
  const style2 = new Style({
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  });
  const style3 = style1.addStyle(style2);
  const expected =
    "{\n" +
    `  padding: 10px;` +
    "\n" +
    `  margin: 10px;` +
    "\n" +
    `  border-radius: 10px;` +
    "\n}";

  expect(style3.formattedString()).toBe(expected);
});

test("addStyle with empty two empty Maps works", () => {
  const style1 = new Style();
  const style2 = new Style();
  const style3 = style1.addStyle(style2);
  expect(style3.formattedString()).toBe("");
});
