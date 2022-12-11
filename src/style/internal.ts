import _ = require("lodash");
import { StyleInterface } from "./external";

// Each style property is a string, but the value is a string, number, or object
const propertyNames: { [key: string]: string } = {
  color: "color",
  backgroundColor: "background-color",
  fontSize: "font-size",
  fontWeight: "font-weight",
  padding: "padding",
  margin: "margin",
  borderRadius: "border-radius",
};

/* 
Data structure: This is how we want styles Map to look like.
Map{
  backgroundColor: {
    name: "background-color",
    value: "red",
  }
  fontSize: {
    name: "font-size",
    value: "12px",
  }
}
*/

interface StyleProperties {
  name: string;
  value: string;
}

export default class Style implements StyleInterface {
  styles: Map<string, StyleProperties> = new Map();

  constructor(obj?: any) {
    if (!obj) return;
    // Take everything passed to the consructor and pass it to the styles Map.
    for (const [key, value] of Object.entries(obj)) {
      const name: string = propertyNames[key];
      this.styles.set(key, { name: name, value: value as string });
    }
  }

  addProperty = (key: string, value: string): Style => {
    this.styles.set(key, { name: propertyNames[key], value: value });
    return this;
  };

  addStyle = (style: Style): Style => {
    // Make a deep copy of style.
    const stylesCopy = _.cloneDeep(this.styles);
    const passedInStylesCopy = _.cloneDeep(style.styles);
    const stylesToReturn = new Style();
    // Merge the two Maps.
    for (const [key, value] of stylesCopy) {
      stylesToReturn.styles.set(key, value);
    }
    for (const [key, value] of passedInStylesCopy) {
      stylesToReturn.styles.set(key, value);
    }
    return stylesToReturn;
  };

  formattedString = (): string => {
    // If the Map is empty, return an empty string.
    if (this.styles.size === 0) return "";

    let arrOfStr = [];
    for (const value of this.styles.values()) {
      arrOfStr.push(`  ${value.name}: ${value.value}`);
    }

    // Both returns generate the same string output. The second return is using string template literal.
    // return "{\n" + arrOfStr.join(";\n") + ";" + "\n}";
    return `{\n${arrOfStr.join(";\n")};\n}`;
  };
}
