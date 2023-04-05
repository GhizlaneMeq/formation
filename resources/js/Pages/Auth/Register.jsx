import React from "react";
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

function SignUp(props) {
    const { data, setData, post, errors } = useForm({

        name: '',
        email: '',
        password: '',

    });
    const submitSignUp = (e) => {
        e.preventDefault();
        post(route('register'));

    };






    return (
        <>



            <form id="sign-up-form" onSubmit={submitSignUp}>

                <div className="inputBox" >
                    <input type="text" value={data.name} name="name" onChange={(e) => setData("name", e.target.value)} />
                    <label htmlFor="name">name</label>
                    <InputError message={errors.name} />
                </div>

                <div className="inputBox" >
                    <input type="email"
                        value={data.email} name="email" onChange={(e) => setData("email", e.target.value)} />
                    <label htmlFor="email">email</label>
                    <InputError message={errors.email} />

                </div>

                <div className="inputBox" >
                    <input type="password" name="password" value={data.password} onChange={(e) => setData("password", e.target.value)} />
                    <label htmlFor="password">Password</label>

                    <InputError message={errors.password} />
                </div>
                <div >
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember me ?</label>
                </div>
                <button className="control-button up">Sign Up</button><br />
                <br />
            </form>
           
        </>

    )
}
export default SignUp;
