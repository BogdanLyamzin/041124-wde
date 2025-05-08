import AddPurchaseForm from "./AddPurchaseForm/AddPurchaseForm";
import PurchaseList from "./PurchaseList/PurchaseList";

import useLocalStorage from "../../shared/hooks/useLocalStorage";

import styles from "./MyPurchases.module.css";

const MyPurchases = () => {
  const { state, setState } = useLocalStorage({
    key: "purchaseList",
    defaultValue: [],
    checkData: Array.isArray,
  });
  // const [purchaseList, setPurchaseList] = useState(() => {
  //   try {
  //     const items = JSON.parse(localStorage.getItem("purchaseList"));
  //     return Array.isArray(items) ? items : [];
  //   } catch {
  //     return [];
  //   }
  // });

  // useEffect(() => {
  //   localStorage.setItem("purchaseList", JSON.stringify(purchaseList));
  // }, [purchaseList]);

  const addPurchase = (newPurchase) => {
    setState((prevPurchaseList) => [...prevPurchaseList, newPurchase]);
  };

  const deletePurchase = (index) => {
    setState((prevPurchaseList) =>
      prevPurchaseList.filter((_, idx) => idx !== index)
    );
  };

  return (
    <div className={styles.wrapper}>
      <AddPurchaseForm submitForm={addPurchase} />
      <PurchaseList items={state} deletePurchase={deletePurchase} />
    </div>
  );
};

export default MyPurchases;
