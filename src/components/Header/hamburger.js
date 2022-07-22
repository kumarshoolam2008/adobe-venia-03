import React from 'react'
// import '../Header/hamburger.css';
import '../../assets/scss/hamburger.scss';
import { NavLink } from "react-router-dom";
import search from '../../assets/images/search.png';
import basket from '../../assets/images/shopping-bag.png';

function Hamburger(props) {
  return (
    <div className='hamburgerPhone'>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div className="hamberger__logo" >
            <NavLink to="/"><span>V</span><span>ENIA</span></NavLink>
          </div>
          <div className="header__icons">
            <ul>
              <NavLink to="#"><li><img src={search} alt="search-image" /></li></NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <img src={basket} alt="basket-image" />{' '}
                {props.countCartItems ? (
                  <button className="btn btn-primary">{props.countCartItems}</button>
                ) : (
                  ''
                )}
              </NavLink>{' '}
            </ul>
          </div>
          <div class="menu-items">
            <li><NavLink to="/women">Women</NavLink></li>
            <li><NavLink to="/men" >Men</NavLink></li>
            <li><NavLink to="/smartGear" >Smart Gear</NavLink></li>
            <li><NavLink to="/accessories" >Accessories</NavLink></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger