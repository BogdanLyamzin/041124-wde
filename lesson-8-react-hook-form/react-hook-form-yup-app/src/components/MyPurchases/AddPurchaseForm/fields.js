export const defaultValues = {
  name: "",
  count: 1,
  urgency: false,
  category: "food",
};

export const fields = {
  name: {
    label: "Название покупки:",
    name: "name",
    placeholder: "Название покупки мин 2 символа",
  },
  count: {
    label: "Количество:",
    name: "count",
    type: "number",
    placeholder: "Количество",
  },
  urgency: {
    label: "Срочность покупки:",
    name: "urgency",
    placeholder: "Срочность покупки",
  },
  category: {
    label: "Категория покупки:",
    name: "category",
    options: [
        {
            value: "food",
            text: "Еда"
        },
        {
            value: "drink",
            text: "Напитки"
        },
        {
            value: "chemical",
            text: "Бытовая химия"
        },
    ]
  }
};

export const categoryList = fields.category.options.map(item => item.value);
