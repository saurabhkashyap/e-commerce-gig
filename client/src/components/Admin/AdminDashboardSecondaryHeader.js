import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./AdminDashboardSecondaryHeader.css";
import ProfileImage from "../Header/ProfileImage";
import { RiDashboardLine, RiFileUserLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GoClippy } from "react-icons/go";
// import { GrDocumentUser } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import MenuDropdown from "./MenuDropdown";

class AdminDashboardSecondaryHeader extends React.Component {
  state = {
    open: false,
  };
  handleClick = (e) => {
    this.setState((prevState) => {
      return {
        open: !prevState.open,
      };
    });
  };
  render() {
    return (
      <div className="container-fluid admin-secondary-dashboard-header">
        {this.state.open ? (
          <div
            onClick={this.handleClick}
            className="back-shed"
            style={{ backgroundColor: "transparent" }}
          ></div>
        ) : null}
        <div className="admin-hamburger-menu-wrapper">
          <div className="admin-hamburger-menu">
            {this.state.open ? (
              <HamburgerMenu
                width={30}
                height={20}
                color="#f76b1a"
                isOpen={true}
                menuClicked={this.handleClick}
              />
            ) : (
              <HamburgerMenu
                width={30}
                height={20}
                color="#f76b1a"
                isOpen={false}
                menuClicked={this.handleClick}
              />
            )}
          </div>
          {this.state.open ? (
            <div className="admin-dashboard-sm-menu">
              <h3>Helloo World Helloo World Helloo World</h3>
              <MenuDropdown />
            </div>
          ) : null}
        </div>
        <ul className="admin-dashboard-menu-lg-items">
          <li>
            <NavLink
              to="/admin-dashboard"
              activeClassName="admin-active-lg-link"
              exact
            >
              <RiDashboardLine /> <span className="ml-2">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="admin-active-lg-link">
              <RiFileUserLine /> <span className="ml-2">Sellers</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="admin-active-lg-link">
              <GoClippy /> <span className="ml-2">Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="admin-active-lg-link">
              <IoIosAddCircleOutline /> <span className="ml-2">Categories</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="admin-active-lg-link">
              <RiDashboardLine /> <span className="ml-2">Dashboard</span>
            </NavLink>
          </li>
        </ul>
        <ProfileImage />
      </div>
    );
  }
}

export default AdminDashboardSecondaryHeader;
