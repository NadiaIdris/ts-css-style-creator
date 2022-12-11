# CSS style creator in TypeScript

## Install project dependencies

- In the project root folder run: `npm install` (or `npm i`).

## Run tests

- In the project root folder run: `npx jest --watchAll`

---

## Exercise 1: make css style class

Write a CSS style maker.
Implement a Style class with methods:

- `addProperty(key: string, value: string): Style` <- Adds a property to the exisiting Style
- `addStyle(style: Style): Style` <- Combines new style with the current style and returns new Style instance.

## Example

```ts
const style1 = new Style({
  color: "red",
  fontSize: "12px",
  fontWeight: "bold",
  backgroundColor: "blue",
  padding: "10px",
  borderRadius: "5px",
});

console.log(style1.formattedString());
/* toString method will return this:
"{
  color: red;
  font-size: 12px;
  font-weight: bold;
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
}"
*/

const style2 = new Style({
  fontFamily: "Arial",
  borderRadius: "20px",
  color: "green",
});

// style2 overrides style1 properties. style3 is a new instance of Style class.
const style3 = style1.addStyle(style2);
```
