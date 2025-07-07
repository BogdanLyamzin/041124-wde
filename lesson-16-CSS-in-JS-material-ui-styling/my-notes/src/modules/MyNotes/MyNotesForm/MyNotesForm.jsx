import { useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

// import TextField from "../../../shared/components/TextField/TextField";

import { fields, noteSchema } from "./fields";

import styles from "./MyNotesForm.module.css";

const MyNotesForm = ({ defaultValues, submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(noteSchema),
  });

  const isEdit = Boolean(Object.keys(defaultValues).length);

  useEffect(() => {
    if (isEdit) {
      for (const key in defaultValues) {
        setValue(key, defaultValues[key]);
      }
    }
  }, [isEdit, defaultValues, setValue]);

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <Box sx={{maxWidth: "300px"}}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          {...register("title")}
          {...fields.title}
          fullWidth
          size="small"
          error={errors.title}
          helperText={errors.title?.message}
          sx={{mb: 2}}
        />
        
        <TextField
          {...register("text")}
          {...fields.text}
          fullWidth
          size="small"
          multiline
          rows={2}
          error={errors.text}
          helperText={errors.text?.message}
        />
        <FormControlLabel sx={{mb: 2}} control={<Checkbox {...register("important")} />} label={fields.important.label} />
        {/* <TextField register={register} {...fields.title} error={errors.title?.message} />
            <TextField register={register} {...fields.text} error={errors.text?.message} />
            <TextField register={register} {...fields.important} error={errors.important?.message} /> */}
        <Button type="submit" variant="contained" fullWidth>
          {isEdit ? "Edit" : "Add"} note
        </Button>
      </form>
    </Box>
  );
};

export default memo(MyNotesForm);
