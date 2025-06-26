import { useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "../../../shared/components/TextField/TextField";

import { fields, noteSchema } from "./fields";

import styles from "./MyNotesForm.module.css";

const MyNotesForm = ({defaultValues, submitForm})=> {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        resolver: yupResolver(noteSchema),
    });
    
    const isEdit = Boolean(Object.keys(defaultValues).length);

    useEffect(()=> {
        if(isEdit) {
            for(const key in defaultValues) {
                setValue(key, defaultValues[key]);
            }
        }
    }, [isEdit, defaultValues, setValue]);

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextField register={register} {...fields.title} error={errors.title?.message} />
            <TextField register={register} {...fields.text} error={errors.text?.message} />
            <TextField register={register} {...fields.important} error={errors.important?.message} />
            <button type="submit" className={styles.btn}>{isEdit ? "Edit" : "Add"} note</button>
        </form>
    )
}

export default memo(MyNotesForm);