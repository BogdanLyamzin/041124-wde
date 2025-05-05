import { useState } from "react";

import { initialState } from "./initialState";

const AddPurchaseForm = ({ addPurchase }) => {
  const [state, setState] = useState({...initialState});

  const handleChange = (event)=> {
    const {value, checked, name, type} = event.target;
    const newValue = type !== "checkbox" ? value : checked;
    setState(prevState => ({...prevState, [name]: newValue}));
  }

  const onAddPurchase = (event) => {
    event.preventDefault();
    addPurchase(state);
    setState({...initialState})
  };

  return (
    <form onSubmit={onAddPurchase}>
      <div>
        <label htmlFor="purchase-name">Название покупки:</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Название покупки"
          id="purchase-name"
        />
      </div>
      <div>
      <label htmlFor="purchase-urgency">Срочность покупки:</label>
        <input
          type="checkbox"
          name="urgency"
          checked={state.urgency}
          onChange={handleChange}
          id="purchase-urgency"
        />
      </div>
      <div>
        <label htmlFor="purchase-category">Категория покупки:</label>
        <select name="category" onChange={handleChange} value={state.category} id="purchase-category">
          <option value="food">Еда</option>
          <option value="drink">Напитки</option>
          <option value="chemical">Бытовая химия</option>
        </select>
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddPurchaseForm;
