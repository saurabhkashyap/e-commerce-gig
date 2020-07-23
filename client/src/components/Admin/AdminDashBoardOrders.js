import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashBoardOrders.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";
import {
  fetchAllOrders,
  hasMoreOrdersFalse,
  adminRadio,
  fetchMoreAllOrders,
  fetchOrderById
} from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import { useRef } from "react";
import { useCallback } from "react";
import BottomPageLoader from "../Pages/BottomPageLoader";
import { useState } from "react";

function AdminDashBoardOrders(props) {
  const [orderId, setOrderId] = useState({ orderId: null });
  const { fetchAllOrders, ordersDate } = props;
  useEffect(() => {
    fetchAllOrders(ordersDate);
  }, [fetchAllOrders, ordersDate]);
  const observer = useRef();
  const lastOrderRef = useCallback(
    node => {
      const fetchMoreData = () => {
        if (props.allAdminOrders.length < props.orderCount) {
          return props.fetchMoreAllOrders(props.ordersDate);
        }
        props.hasMoreOrdersFalse();
      };
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          fetchMoreData();
        }
      });
      if (node) observer.current.observe(node);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [props]
  );
  const handleRadioButton = event => {
    const { name, value } = event.target;
    console.log(name, value);
    props.adminRadio({ name, value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.fetchOrderById(orderId.orderId);
    setOrderId({ orderId: null });
  };
  if (!props.allAdminOrders || props.radioLoading || props.adminOrderLoading)
    return <ScreenLoader />;

  return (
    <div className="container-fluid p-0">
      <AdminDashBoardHeader />
      <AdminDashboardSecondaryHeader />
      <div
        className="container mt-4 py-2 m-0 mx-auto "
        style={{ backgroundColor: "#fff" }}
      >
        <div className="my-1" style={{ textAlign: "center" }}>
          <h3>Orders</h3>
        </div>
        <div className="admin-order-search-filter">
          <form onSubmit={handleSubmit} className="search">
            <div className="form-group input-group">
              <input
                onChange={e => setOrderId({ orderId: e.target.value })}
                className="form-control"
                type="text"
                placeholder="Search order ID..."
              />
              <div className="input-group-append">
                <button id="order-search-btn" type="submit">
                  <IconContext.Provider value={{ className: "mr-1 " }}>
                    <div className="icon-container">
                      <AiOutlineSearch style={{ fontSize: "20px" }} />
                      <span>Search</span>
                    </div>
                  </IconContext.Provider>
                </button>
              </div>
            </div>
          </form>
          <div className="filter">
            <div className="admin-filter">
              <div className="admin-filter-icon">
                <span className="y">Filter:</span>
                <FiFilter style={{ fontSize: "25px" }} />
              </div>
              <div className="filter-options">
                <div className="radio">
                  <input
                    name="ordersDate"
                    type="radio"
                    id="radio_33"
                    onChange={handleRadioButton}
                    checked={ordersDate === "today"}
                    value="today"
                  />
                  <label htmlFor="radio_33" className="m-0">
                    Today
                  </label>
                </div>
                <div className="radio">
                  <input
                    name="ordersDate"
                    type="radio"
                    id="radio_44"
                    onChange={handleRadioButton}
                    checked={ordersDate === "lastWeek"}
                    value="lastWeek"
                  />
                  <label htmlFor="radio_44" className="m-0">
                    Last Week
                  </label>
                </div>
                <div className="radio">
                  <input
                    name="ordersDate"
                    type="radio"
                    id="radio_55"
                    onChange={handleRadioButton}
                    checked={ordersDate === "lastMonth"}
                    value="lastMonth"
                  />
                  <label htmlFor="radio_55" className="m-0">
                    Last Month
                  </label>
                </div>
                <div className="radio">
                  <input
                    name="ordersDate"
                    type="radio"
                    id="radio_66"
                    onChange={handleRadioButton}
                    checked={ordersDate === "pendingOrders"}
                    value="pendingOrders"
                  />
                  <label htmlFor="radio_66" className="m-0">
                    Pending Orders
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mapping here */}
        {props.allAdminOrders &&
          props.allAdminOrders.length !== 0 &&
          props.allAdminOrders.map((order, index) => {
            if (props.allAdminOrders.length === index + 1) {
              return (
                <div
                  ref={lastOrderRef}
                  className="admin-dashboard-order-wrapper box-container"
                  key={order._id}
                >
                  <div className="admin-dashboard-order p-3">
                    <div className="row">
                      <div className="col-md-5">
                        <strong>Order ID: </strong>
                        <span>{order._id}</span>{" "}
                      </div>
                      <div className="col-md-5">
                        <strong>Date: </strong>
                        <span>
                          {new Date(order.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="col-md-2">
                        <Link
                          className="admin-order-view-more-link"
                          to={`/admin-order/${order._id}`}
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div
                className="admin-dashboard-order-wrapper box-container"
                key={order._id}
              >
                <div className="admin-dashboard-order p-3">
                  <div className="row">
                    <div className="col-md-5">
                      <strong>Order ID: </strong>
                      <span>{order._id}</span>{" "}
                    </div>
                    <div className="col-md-5">
                      <strong>Date: </strong>
                      <span>{new Date(order.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="col-md-2">
                      <Link
                        className="admin-order-view-more-link"
                        to={`/admin-order/${order._id}`}
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="box-container">
          <h2>{props.orderError && props.orderError}</h2>
        </div>
      </div>
      {props.ordersToSkip < props.orderCount && <BottomPageLoader />}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    allAdminOrders: state.product.allAdminOrders,
    orderCount: state.product.orderCount,
    ordersToSkip: state.product.ordersToSkip,
    ordersDate: state.product.ordersDate,
    radioLoading: state.product.radioLoading,
    orderError: state.product.orderError,
    adminOrderLoading: state.product.adminOrderLoading
  };
};
export default connect(mapStateToProps, {
  fetchAllOrders,
  hasMoreOrdersFalse,
  adminRadio,
  fetchMoreAllOrders,
  fetchOrderById
})(AdminDashBoardOrders);
