import { useState } from "react";

const AddPurchaseForm = ({ addPurchase }) => {
  const [purchaseName, setPurchaseName] = useState("");
  const [purchaseCategory, setPurchaseCategory] = useState("food");

  const handleChangeName = (event) => {
    setPurchaseName(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setPurchaseCategory(event.target.value);
  };

  const onAddPurchase = () => {
    addPurchase({name: purchaseName, category: purchaseCategory});
    setPurchaseName("");
    setPurchaseCategory("food");
  };

  return (
    <div>
      <div>
        <label htmlFor="purchase-name">Название покупки:</label>
        <input
          value={purchaseName}
          onChange={handleChangeName}
          placeholder="Название покупки"
          id="purchase-name"
        />
      </div>
      <div>
        <label htmlFor="purchase-category">Категория покупки:</label>
        <select onChange={handleChangeCategory} value={purchaseCategory} id="purchase-category">
          <option value="food">Еда</option>
          <option value="drink">Напитки</option>
          <option value="chemical">Бытовая химия</option>
        </select>
      </div>
      <button onClick={onAddPurchase}>Добавить</button>
    </div>
  );
};

export default AddPurchaseForm;
