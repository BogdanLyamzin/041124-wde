import Student from "./User.js";
import { getCurrentMonth, isLeapYear } from "./dateFunctions.js";

const newUser = new Student({
  firstName: "Bohdan",
  lastName: "Liamzin",
  birthday: "03.01.1986",
});

const userElement = document.getElementById("user");
const year = isLeapYear(2025) ? "Высокосный год" : "Невысокосный год";
userElement.textContent = `Добро пожаловать ${
  newUser.fullName
}. Сегодня ${getCurrentMonth()} месяц. ${year}`;
