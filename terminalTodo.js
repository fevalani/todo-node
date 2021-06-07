import readlineSync from "readline-sync";
import add from "./add.js";
import list from "./list.js";
import remove from "./remove.js";

const actions = ["Add", "List", "Remove"];
let index = readlineSync.keyInSelect(actions, "Type your command: ");
const todoList = [];

while (index !== -1) {
  if (index === 0) {
    todoList.push(add());
  } else if (index === 1) {
    list(todoList);
  } else if (index === 2) {
    remove();
  }
  index = readlineSync.keyInSelect(actions, "Type your command: ");
}
