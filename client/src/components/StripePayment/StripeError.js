import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./StripeError.css";

class StripeError extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <div className="box-container py-3 pl-2 pr-1">
                  <div className="d-flex mb-3 align-items-center justify-content-center">
                    <AiOutlineExclamationCircle
                      style={{ fontSize: "100px", color: "#f76b1a" }}
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }} className="mb-2">
                    Ooops!
                  </h2>
                  <p id="stripe-payment-error-info">
                    It seems your provider has rejected the transaction. Try a
                    different payment method or contact us
                    <Link className="mx-1" to="/">
                      here
                    </Link>{" "}
                    to assist you.
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link
                      to="/"
                      className="btn btn-md my-3 stripe-error-to-shop"
                    >
                      Back To Shop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default StripeError;