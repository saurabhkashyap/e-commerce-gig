import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";
import Product from "./components/Product/Product";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Authenticate from "./components/Authenticate/Authenticate";
import AddressForm from "./components/Checkout/AddressForm";
import CheckOut from "./components/Checkout/Checkout";
import { connect } from "react-redux";
import "./App.css";
import Account from "./components/Account/Account";
import changePassword from "./components/Account/changePassword";
import Orders from "./components/Account/Orders";
import Wishlist from "./components/Account/Wishlist";
import ForgotPassword from "./components/Account/ForgotPassword";
import MobileLogo from "./components/Header/MobileLogo";
// import EmailSent from "./components/Authenticate/EmailSent";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        {/* <Route path="/sign-in" exact component={Authenticate} /> */}
        {this.props.isSignedIn ? (
          <Route
            render={() => (
              <React.Fragment>
                <div className="content">
                  <MobileLogo />
                  <Header />
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/address" exact component={AddressForm} />
                    <Route path="/checkout" exact component={CheckOut} />
                    <Route path="/account" exact component={Account} />
                    <Route path="/orders" exact component={Orders} />
                    <Route path="/wishlist" exact component={Wishlist} />
                    <Route
                      path="/change-password"
                      exact
                      component={changePassword}
                    />
                  </Switch>
                </div>
                <Footer />
                <MiniMenuWrapper />
              </React.Fragment>
            )}
          />
        ) : (
          <Route
            render={() => (
              <React.Fragment>
                <div>
                  <Switch>
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/sign-in" component={Authenticate} />
                    {/* <Route path="/confirm-email" component={EmailSent} /> */}
                  </Switch>
                </div>
              </React.Fragment>
            )}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(App);
