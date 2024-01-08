import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/argentBankLogo.png';
import { logout } from '../../redux/reducers/authSlice';
import "../NavBar/_NavBar.scss";





function NavBar  ()  {
    const isConnected = useSelector((state) => state.auth?.token);
const firstname = useSelector((state) => state.user?.userData?.firstname);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
            <img src={Logo} alt="Bank Logo" />
            </Link>
               {isConnected ? (
                    <div className='connected'>
                        <Link to='/profile'>
                            <i className='fa fa-user-circle sign-in-icon' />
                            <p>{firstname}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
        </nav>
    );
};

export default NavBar;
