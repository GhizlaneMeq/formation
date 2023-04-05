import React from 'react'
import { Link, useForm } from '@inertiajs/react';
import Navbar from './../Navbar/Navbar';
import InputError from '@/Components/InputError';

function newCours({ auth }) {


    const { data, setData, post, errors } = useForm({

        title: '',
        description: '',
        lien: '',
        video: '',

        // image: '',


    });
    const submitCours = (e) => {
        e.preventDefault();
        post(route('submitCours'));

    };


    return (
        <>
            <Navbar auth={auth} />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={submitCours} encType="multipart/form-data">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" name='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={data.title} onChange={(e) => setData("title", e.target.value)} />
                                <InputError message={errors.title} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                                <input type="text" name='description' className="form-control" id="exampleInputPassword1"
                                    value={data.description} onChange={(e) => setData("description", e.target.value)} />
                                <InputError message={errors.description} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">le lien</label>
                                <input type="text" name="lien" className="form-control" id="exampleInputPassword1"
                                    value={data.lien} onChange={(e) => setData("lien", e.target.value)} />
                                <InputError message={errors.lien} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">le video</label>
                                <input type="text" name="video" className="form-control" id="exampleInputPassword1"
                                    value={data.video} onChange={(e) => setData("video", e.target.value)} />
                                <InputError message={errors.lien} />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">describtion</label>
                                <input type="file" name="image" className="form-control" id="exampleInputPassword1"
                                 value={data.image}  onChange={(e) => setData("image", e.target.value)} />
                                <InputError message={errors.image} />
                            </div> */}
                            <button type="submit" className="btn btn-primary form-control">Submit</button>
                        </form>

                    </div>
                </div>
            </div>


        </>
    )
}

export default newCours
