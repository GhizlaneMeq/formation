import React from 'react'
import { Link, useForm } from '@inertiajs/react';
import Navbar from './../Navbar/Navbar';


function Cours({ auth }) {

    const { post, get } = useForm({


    });
    const NewCours = (e) => {
        e.preventDefault();
        get(route('NewCours'));

    }

    return (
        <>
            <Navbar  auth={auth} />
            {auth.user.isAdmin ? (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <button className='btn btn-primary form-control' onClick={NewCours}>
                                create new cours
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card " style={{ width: '18rem' }}>
                            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {auth.user.isAdmin ? (
                                    <>
                                        <button className='btn btn-success'>update</button>
                                        <button className='btn btn-danger'>delete</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {auth.user.isAdmin ? (
                                    <>
                                        <button className='btn btn-success'>update</button>
                                        <button className='btn btn-danger'>delete</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {auth.user.isAdmin ? (
                                    <>
                                        <button className='btn btn-success'>update</button>
                                        <button className='btn btn-danger'>delete</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Cours
