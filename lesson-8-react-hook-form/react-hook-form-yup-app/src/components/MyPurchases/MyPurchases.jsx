import { useState, useEffect } from "react";

import AddPurchaseForm from "./AddPurchaseForm/AddPurchaseForm";
import PurchaseList from "./PurchaseList/PurchaseList";

import { getPurchasesApi, addPurchaseApi, deletePurchaseApi } from "../../shared/api/purchases-api";

import styles from "./MyPurchases.module.css";

const MyPurchases = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data, error } = await getPurchasesApi();
      setLoading(false);
      if (data) return setItems(data);
      setError(error?.response?.data?.message || error.message);
    };

    fetchItems();
  }, []);

  const addPurchase = async payload => {
    setLoading(true);
    const {data, error} = await addPurchaseApi(payload);
    setLoading(false);
    if(data) {
      return setItems(prevItems => [...prevItems, data]);
    }
    setError(error?.response?.data?.message || error.message);
  };

  const deletePurchase = async id => {
    setLoading(true);
    const {data, error} = await deletePurchaseApi(id);
    setLoading(false);
    if(data) {
      return setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    setError(error?.response?.data?.message || error.message);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <AddPurchaseForm submitForm={addPurchase} />
        <PurchaseList items={items} deletePurchase={deletePurchase} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default MyPurchases;
