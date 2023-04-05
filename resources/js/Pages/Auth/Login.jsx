import React from "react";
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

function SignIn() {
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',

    });
    const submitSignIn = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    const googleAuth = (e) => {
        e.preventDefault();
        get(route('auth.google'))

    }
    return (
        <>
            <h1>Create Account</h1>
            <form onSubmit={submitSignIn} id="sign-in-form" className='form-group '>

                <div >
                    <div className="inputBox">
                        <input className="form-control" id="email" type="email" name="email" value={data.email} onChange={(e) => setData("email", e.target.value)}  />
                        <label htmlFor="email">email</label>
                        <InputError message={errors.email} />
                    </div>

                </div>

                <div >
                    <div className="inputBox">
                        <input className="form-control mb-3"
                            id="passwordSignIn" type="password" name="password" value={data.password} onChange={(e) => setData("password", e.target.value)}  />
                        <label htmlFor="password">password</label>
                        <InputError message={errors.password} />
                    </div>
                </div>

                <div >
                    <input type="checkbox" name="checkbox" id="checkbo" className="form-control" />
                    <label htmlFor="checkbo">Remember me ?</label>
                </div>
                <button className="control-button in btn btn-primary">Sign In</button>
                <br/>
                <br/>
                <button onClick={googleAuth}>connect with google</button>
            </form>

        </>
    )
}
export default SignIn;
