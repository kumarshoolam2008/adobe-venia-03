import React, { useState } from "react";
import '../../assets/scss/header.css';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import LoginApp from "../SignIn/LoginApp";
import basket from '../../assets/images/shopping-bag.png';
import '../../assets/css/aem-grid.css';
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

const Header = (props) => {
  const [loading, setLoading] = useState(false);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={350} />
          <Skeleton height={350} />
        </div>
      </>
    );
  }
  const ShowProducts = () => {
    return (
      <header className="header">
        <div className="headerHamburger">
          <div class="aem-GridColumn--phone--12">
            <div className="container">
              <div className="header__content">
                <div className="header__logo" >
                  <NavLink className="logoo" to="/"><span>V</span><span>ENIA</span></NavLink>
                </div>
                <div className="header__categories">
                  <ul>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men" >Men</NavLink></li>
                    <li><NavLink to="/smartGear" >Smart Gear</NavLink></li>
                    <li><NavLink to="/accessories" >Accessories</NavLink></li>
                  </ul>
                </div>
                <div className="header__icons">
                  <ul>
                    <li className="search"><NavLink to="#"> <img src={search} alt="search-image" /> Search</NavLink></li>
                    <li className="dropdown sign">
                      <NavLink to='#' className='dropbtn'>
                        <img src={user} alt="user" />Sign in</NavLink>
                      <div class="dropdown-content">
                        <div className="login">
                          <LoginApp />
                        </div>
                      </div>
                    </li>
                    <li className="cartCount">
                      <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                        <img src={basket} alt="basket-image" />{' '}
                        {props.countCartItems ? (
                          <button className="btn btn-primary">{props.countCartItems}</button>
                        ) : (
                          ''
                        )}
                      </NavLink>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="headerHamburger">
      <div className="my-5 py-5">
        <div className="justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}

        </div>
      </div>
    </div>
  )
}
export default Header;
