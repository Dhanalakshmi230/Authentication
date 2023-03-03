import React from 'react'
import { Link } from 'react-router-dom';
 export  default function Home() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="homepage" >Home</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=" navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Accounts" >Accounts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="values">User Details</Link>
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>

            
        </div>
    )
}

