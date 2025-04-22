// import { createElement } from "react"

const welcomeText = "Welcome to JSX";
const day = new Date().getDate();
const students = ["Alexandr", "Inga", "Olya"];
const user = {
  name: "Bohdan",
  lastName: "Liamzin"
};

const getMonth = ()=> {
  const now = new Date();
  return now.getMonth() + 1;
}

function App() {
  // const title = createElement("h1", null, "Welcome to JSX");
  // const main = createElement("main", null, title);

  return (
    <>
      <header></header>
      <main>
        <h1>{welcomeText}. Сегодня {getMonth()} месяц и {day} число.</h1>
        {true}
        {false}
        {null}
        {undefined}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          vero dolores unde aspernatur! Illum et aut vel optio sequi fuga,
          provident iure labore, ad velit ratione expedita sed rem harum.
        </p>
        <p>Наши студенты: {students}</p>
        <p>Преподаватель {user.name} {user.lastName}</p>
        <input placeholder="Username" disabled />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="field"
          type="password"
          placeholder="User password"
          maxLength={5}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
