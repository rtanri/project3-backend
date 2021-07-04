export const isACat = (animal: string): boolean => animal === "cat";

export function addNumbers(a: number, b: number) {
  return a + b;
}

export const introduction = (name: string) => `Hello ${name}`;

export const introducePerson = (name: string): void =>
  console.log(introduction(name));

export const dumpObject = (type: string, obj: unknown): string =>
  `${type}:${JSON.stringify(obj)}`;

export const dumpStringOrNumber = (info: number | string) => `value ${info}`;

/* ============================ */
// source - https://www.youtube.com/watch?v=j92fxPpFaL8&ab_channel=JackHerrington
