import readlineSync from "readline-sync";
import check from "./check.js";

export default function list(list) {
  const read = readlineSync(list);
  console.log(read);
}
