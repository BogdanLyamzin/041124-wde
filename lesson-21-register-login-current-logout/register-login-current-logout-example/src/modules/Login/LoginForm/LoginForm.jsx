import { useId } from "react";
import { useForm } from "react-hook-form";

import styles from "./LoginForm.module.css";

const LoginForm = ({submitForm})=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    const emailId = useId();
    const passwordId = useId();

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.group}>
            <label htmlFor={emailId} className={styles.label}>Email:</label>
            <input type="email" {...register("email", {required: "Email required"})} placeholder="Email" id={emailId} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.group}>
            <label htmlFor={passwordId} className={styles.label}>Password:</label>
            <input type="password" {...register("password", {required: "Password required"})} placeholder="Password" id={passwordId} />
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
    </form>
}

export default LoginForm;