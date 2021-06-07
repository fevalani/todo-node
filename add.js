import readlineSync from "readline-sync";
import fs, { readFileSync } from "fs";

export default function add() {
  const todo = readlineSync.question("What do you to do? ");
  return todo;
}
