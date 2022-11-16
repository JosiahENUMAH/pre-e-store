import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector((state)=>state.handleCart)
    const navigate = useNavigate()

    let user = JSON.parse(localStorage.getItem('user-info'))
        console.log(user)

    function logOut(){
       localStorage.clear()
       navigate.push('/register')

    }

  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container" >
            <Link className="navbar-brand fw-bolder" fw-bold fs-4 to="/">
                GROUP C
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                
                
            </ul>

            <div className='buttons'>
                <Link to='/login' className='btn btn-outline-success me-2'>
                    <i className='fa fa-sign-in me-1'></i>
                    Login
                </Link>
                <Link to='/register' className='btn btn-outline-success me-2'>
                    <i className='fa fa-user-plus me-2'></i>
                    Register
                </Link>
                <Link to='/cart' className='btn btn-outline-success me-2'>
                    <i className='fa fa-shopping-cart me-2'></i>
                    Cart ({state.length})
                </Link>
            </div>
            </div>
            {!localStorage.getItem('user-info')?
                <div class="dropdown me-2" title={user && user.first_name}>
                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Account {/*{user.name}*/}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button class="dropdown-item" type="button">Profile</button></li>
                        <li><button class="dropdown-item" type="button">Another </button></li>
                        <li><button class="dropdown-item" type="button">
                        <Link to='/register' style={{textDecoration:"none"}} onClick={logOut}>Logout</Link></button></li>
                    </ul>
                </div> : null}

        </div>
        </nav>

    </div>
  )
}

export default Navbar