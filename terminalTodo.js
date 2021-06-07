import readlineSync from "readline-sync";
import add from "./add.js";
import list from "./list.js";
import remove from "./remove.js";

const actions = ["Add", "List", "Remove"];
let index = readlineSync.keyInSelect(actions, "Type your command: ");
const todoList = [];

while (index !== -1) {
  if (index === 0) {
    todoList.push(readlineSync.question("What do you to do? "));
  } else if (index === 1) {
    console.log("========================");
    todoList.forEach((item) => console.log(item));
    console.log("========================");
  } else if (index === 2) {
    remove();
  }
  index = readlineSync.keyInSelect(actions, "Type your command: ");
}
