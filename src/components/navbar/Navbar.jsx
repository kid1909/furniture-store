import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [modal, setModal] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);

  const openModal = () => {
    setModal(!modal);
    setMenu1(!menu1);
  };

  const openMenu1 = () => {
    setModal(!modal);
    setMenu1(true);
  };
  const openMenu2 = () => {
    setModal(!modal);
    setMenu2(true);
  };

  const closeMenu = () => {
    setModal(false);
    setMenu1(false);
    setMenu2(false);
  };

  return (
    <>
      <div className="grid wide">
        <div className="row">
          <div className="col l-1 m-0 c-0">
            <div className="menu_group" onClick={openMenu1}>
              <i className="fas fa-bars"></i>
              <p className="menu_label">Menu</p>
            </div>
          </div>
          <div className="col l-1">
            <Link to="/">
              {" "}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </Link>
          </div>
          <div className="col l-6 m-3">
            <div className="search_bar_group">
              <i className="fas fa-search"></i>
              <input
                className="search_bar"
                placeholder="Find what you need to Bring Home"
              />
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <div className="col l-2">
            <div className="login_group" onClick={openMenu2}>
              <i className="fas fa-user"></i>
              <div className="login_label">Hej! Log in or sign up</div>
            </div>
          </div>

          <div className="col l-2">
            <div className="favourite_cart_group">
              <i className="fas fa-heart"></i>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>

          <div className="col l-12">
            <div className="mobile_user_group">
              <i className="fas fa-user" onClick={openMenu2}></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-bars" onClick={openMenu1}></i>
            </div>
          </div>
        </div>

        <div className="row submenu">
          <div className="col l-4">
            <div className="sub_menu">
              <div className="sub_menu_item">
                <Link to="/Products"> Products</Link>
              </div>

              <div className="sub_menu_item">Rooms</div>
              <div className="sub_menu_item">Deals</div>
              <div className="sub_menu_item">Design</div>
            </div>
          </div>
          <div className="col l-o-8">
            <div className="location_group">
              <div className="postal_code">
                <i className="fas fa-truck"></i>
                <p className="postal_code_label">Enter postal code</p>
              </div>
              <div className="store_location">
                <i className="fas fa-store"></i>
                <p className="postal_code_label">Select store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={closeMenu}
        className={`modal__overlay ${modal ? "active-modal" : ""}`}
      ></div>
      <div className={`expand_menu ${menu1 ? "active-menu" : ""}`}>
        <div className="close_icon" onClick={closeMenu}>
          {" "}
          <i className="fas fa-times"></i>{" "}
        </div>

        <ul className="expand_menu_group">
          <li className="expand_menu_item">
            <Link to="/Products"> Products </Link>
          </li>
          <li className="expand_menu_item">Rooms</li>
          <li className="expand_menu_item">Deals</li>
          <li className="expand_menu_item">Design</li>
        </ul>
      </div>
      <div className={`expand_menu2 ${menu2 ? "active-menu2" : ""}`}>
        <div className="close_icon2" onClick={closeMenu}>
          <i className="fas fa-times"></i>{" "}
        </div>{" "}
        <ul className="expand_menu_group2">
          <li className="expand_menu_item2">
            <p className="sign_in_label"> Hej </p>
            <div className="close_icon-sign_in"> Sign In</div>
          </li>
          <li className="expand_menu_item2">
            <p className="more_info_label"> Join IKIA Family </p>
            <div className="arrow_btn">
              {" "}
              <i className="fas fa-angle-right fa-lg"></i>{" "}
            </div>
          </li>
          <li className="expand_menu_item2">
            <p className="more_info_label2"> Join IKIA Business Network </p>
            <div className="arrow_btn">
              {" "}
              <i className="fas fa-angle-right  fa-lg"></i>{" "}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
