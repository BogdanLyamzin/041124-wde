import { useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from "./MyNotesForm.module.css";

const MyNotesForm = ({defaultValues, submitForm})=> {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm();
    
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
            <input {...register("title", {
                required: "Title must be exist"
            })} type="text" placeholder="Note title" className={styles.field} />
            {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            <textarea  {...register("text", {
                required: "Text must be exist"
            })} placeholder="Note text" className={styles.field}></textarea>
            {errors.text && <p className={styles.error}>{errors.text.message}</p>}
            <div className={styles.group}>
                <input {...register("important")} type="checkbox" />
                <label>Important</label>
            </div>
            <button type="submit" className={styles.btn}>{isEdit ? "Edit" : "Add"} note</button>
        </form>
    )
}

export default MyNotesForm;