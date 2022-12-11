import Style from "./internal";

export interface StyleInterface {
  /** Adds a property name and value to the existing style instance. */
  addProperty: (key: string, value: string) => Style;
  addStyle: (style: Style) => Style;
  formattedString(): string;
}
