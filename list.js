import readlineSync from "readline-sync";
import check from "./check.js";

export default function list(lista) {
  console.log(lista.forEach((item) => item));
}
