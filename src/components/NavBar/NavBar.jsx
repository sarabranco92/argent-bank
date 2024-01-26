
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/argentBankLogo.webp';
import { logout } from '../../redux/reducers/authSlice';
import "../NavBar/_NavBar.scss";


function NavBar() {
    const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
    const username = useSelector((state) => state.user.userData.userName);

 // Initialize dispatch function for dispatching actions to the Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img src={Logo} alt="Bank Logo" />
            </Link>
            {isLoggedIn ? (
                <div className='connected'>
                    <Link to='/profile'>
                        <i className='fa fa-user-circle sign-in-icon' />
                        <p>{username}</p>
                    </Link>
                    <Link to='/' onClick={logoutHandler}>
                        <i className="fa-solid fa-arrow-right-from-bracket" />
                        <p>Sign Out</p>
                    </Link>
                </div>
            ) : (
                <div className='not-connected'>
                    <Link to='/login'>
                        <i className="fa-solid fa-circle-user"></i>
                        <p>Sign In</p>
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
