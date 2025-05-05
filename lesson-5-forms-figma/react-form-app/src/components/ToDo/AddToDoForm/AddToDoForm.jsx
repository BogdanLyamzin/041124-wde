import { useState } from "react";

import { initialState } from "./initialState";

const AddToDoForm = ({ addToDo }) => {
  const [state, setState] = useState({...initialState});

  const handleChange = (event)=> {
    const {value, checked, name, type} = event.target;
    const newValue = type !== "checkbox" ? value : checked;
    setState(prevState => ({...prevState, [name]: newValue}));
  }

  const onAddToDo = (event) => {
    event.preventDefault();
    addToDo(state);
    setState({...initialState})
  };

  return (
    <form onSubmit={onAddToDo}>
      <div>
        <label htmlFor="todo-name">Название дела:</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Название дела"
          id="todo-name"
        />
      </div>
      <div>
      <label htmlFor="todo-urgency">Срочность дела:</label>
        <input
          type="checkbox"
          name="urgency"
          checked={state.urgency}
          onChange={handleChange}
          id="todo-urgency"
        />
      </div>
      <button type="submit">Добавить дело</button>
    </form>
  );
};

export default AddToDoForm;
