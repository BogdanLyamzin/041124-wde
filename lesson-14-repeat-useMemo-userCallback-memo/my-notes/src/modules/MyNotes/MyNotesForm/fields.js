import * as Yup from "yup";

export const noteSchema = Yup.object({
    title: Yup.string().trim().required("Title must be exist"),
    text: Yup.string().trim().required("Text must be exist"),
});

export const fields = {
    title: {
        label: "Title",
        name: "title",
        type: "text",
        placeholder: "Note title"
    },
    text: {
        label: "Text",
        name: "text",
        tag: "textarea",
        placeholder: "Not text"
    },
    important: {
        label: "Important",
        name: "important",
        type: "checkbox"
    }
}