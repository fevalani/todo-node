import readlineSync from "readline-sync";

const actions = ["Add", "List", "Remove"];
const actionsCheck = ["Add", "List", "Check", "Remove"];
let index = readlineSync.keyInSelect(actions, "Type your command: ");
const todoList = [];

while (index !== -1) {
  if (todoList.length === 0) {
    if (index === 0) {
      todoList.push({
        done: "🔴",
        name: `${readlineSync.question("What do you to do? ")}`,
      });
    } else if (index === 1) {
      console.log("========================");
      todoList.forEach((item) => `${console.log(item.done, item.name)}}`);
      console.log("========================");
    } else if (index === 2) {
      const remove = readlineSync.keyInSelect(
        todoList.map((item) => item.done + " " + item.name),
        "What todo do you want to remove? "
      );
      todoList.splice(remove, 1);
      console.log("========================");
      todoList.forEach((item) => `${console.log(item.done, item.name)}}`);
      console.log("========================");
    }
  } else {
    if (index === 0) {
      todoList.push({
        done: "🔴",
        name: `${readlineSync.question("What do you to do? ")}`,
      });
    } else if (index === 1) {
      console.log("========================");
      todoList.forEach((item) => `${console.log(item.done, item.name)}}`);
      console.log("========================");
    } else if (index === 2) {
      const check = readlineSync.keyInSelect(
        todoList.map((item) => item.done + " " + item.name),
        "What todo do you want to check/uncheck? "
      );
      if (todoList[check].done === "🟢") {
        todoList[check].done = "🔴";
      } else {
        todoList[check].done = "🟢";
      }
    } else if (index === 3) {
      const remove = readlineSync.keyInSelect(
        todoList.map((item) => item.done + " " + item.name),
        "What todo do you want to remove? "
      );

      todoList.splice(remove, 1);
      console.log("========================");
      todoList.forEach((item) => `${console.log(item.done, item.name)}}`);
      console.log("========================");
    }
  }

  index = readlineSync.keyInSelect(
    todoList.length === 0 ? actions : actionsCheck,
    "Type your command: "
  );
}
