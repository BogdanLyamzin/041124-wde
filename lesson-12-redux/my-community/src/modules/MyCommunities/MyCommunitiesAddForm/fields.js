import * as Yup from "yup";

export const defaultValues = {
    name: "",
    url: "",
    favorite: false,
};

export const fields = {
    name: {
        placeholder: "Название канала"
    },
    url: {
        placeholder: "Ссылка на канал"
    },
    favorite: {
        type: "checkbox"
    }
};

export const communitySchema = Yup.object({
    name: Yup.string().trim().required(),
    url: Yup.string().trim().required(),
})