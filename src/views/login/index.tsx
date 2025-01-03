import React from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Login = () => {

    let history = useNavigate();

    const onLogout = () => {
        history("/");
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(
            { data }
        );

    };

    return (
        <div className="loginContent">
            <div className="loginContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formContainer">
                        <div className="imputsText">Username</div>
                        <input {...register('firstName')} />
                        <div className="imputsText">Password</div>
                        <input type="password" {...register('password', { required:true,})} />
                        {errors.password && <p>enter password.</p>}
                        <div className="buttonLoginContainer">
                            <button type="submit" className="btn btn-success button1">Login</button>
                            <button type="button" onClick={() => onLogout()} className="btn btn-secondary button2">Home</button>
                        </div>
                    </div>

                </form>
                <form action="">
                </form>
            </div>
        </div>

    )
}

export default Login;