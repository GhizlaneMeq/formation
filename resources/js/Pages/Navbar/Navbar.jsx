import React from 'react'
import { Link, useForm } from '@inertiajs/react';



function Navbar({ auth }) {


    return (
        <>
            <nav className="navbar navbar-expand-lg   ">
                <div className="container-fluid">
                    <Link className="navbar-brand  " href="#">hhh</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" href="#">service </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" href="#">Formation</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" href="#">Contact-us</Link>
                            </li>
                            {auth.user ? (
                                <li className="nav-item dropdown ps-5">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {auth.user.name}
                                    </a>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link className="dropdown-item" href={route('profile.edit')} >Profile</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href={route('logout')} method="post" >Log Out</Link></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item mx-4">
                                    <Link className="nav-link" href="/login&sign">Login/SignUp</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <p class=' animate__animated animate__flipInX'>  welcom  {auth.user.isAdmin ? 'admin' : 'not admin'}</p>

            {auth.user.isAdmin ? (<button>delete</button>) : null} */}
        </>
    )
}

export default Navbar
