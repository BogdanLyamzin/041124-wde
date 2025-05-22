import * as Yup from "yup";

import { categoryList } from "./fields";

const purchaseSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Название покупки должно быть минимум из 2 символов")
    .required("У покупки должно быть  название"),
  count: Yup.number().min(1, "Количество покупок не может быть мень 1").required(),
  category: Yup.string().oneOf(categoryList).required("Категория покупки обязательна"),
});

export default purchaseSchema;
