import { useState } from "react";

import AddPurchaseForm from "./AddPurchaseForm/AddPurchaseForm";
import PurchaseList from "./PurchaseList/PurchaseList";

import styles from "./MyPurchases.module.css";

const MyPurchases = () => {
  const [purchaseList, setPurchaseList] = useState([]);

  const addPurchase = (newPurchase) => {
    setPurchaseList((prevPurchaseList) => [...prevPurchaseList, newPurchase]);
  };

  const deletePurchase = (index) => {
    setPurchaseList((prevPurchaseList) =>
      prevPurchaseList.filter((_, idx) => idx !== index)
    );
  };

  return (
    <div className={styles.wrapper}>
      <AddPurchaseForm addPurchase={addPurchase} />
      <PurchaseList items={purchaseList} deletePurchase={deletePurchase} />
    </div>
  );
};

export default MyPurchases;
