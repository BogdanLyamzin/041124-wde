import axios from "axios";

import requestDecorator from "./requestDecorator";

const purchasesInstance = axios.create({
  baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/purchases",
});

export const getPurchasesApi = requestDecorator(() =>
  purchasesInstance.get("/")
);

export const addPurchaseApi = requestDecorator((payload) =>
  purchasesInstance.post("/", payload)
);

export const deletePurchaseApi = requestDecorator( id => 
  purchasesInstance.delete(`/${id}`)
)