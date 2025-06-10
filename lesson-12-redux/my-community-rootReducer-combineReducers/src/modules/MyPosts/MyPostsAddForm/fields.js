import * as Yup from "yup";

export const defaultValues = {
    title: "",
    text: ""
};

export const fields = {
    title: {
        placeholder: "Название поста"
    },
    text: {
        placeholder: "Текст поста"
    },
};

export const postSchema = Yup.object({
    title: Yup.string().trim().required(),
    text: Yup.string().trim().min(10).required(),
})