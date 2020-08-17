import React from "react";

import "./AdminDashBoardReferrals.css";
import MobileLogo from "../Header/MobileLogo";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";

class AdminDashBoardReferrals extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <MobileLogo />
        <AdminDashBoardHeader />
        <div className="container-fluid p-0">
          <AdminDashboardSecondaryHeader />
          <div className="container box-container mt-3">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Referrals
            </h3>
            <div className="row y">
              <div className="col-md-4">
                <h6>Helloo</h6>
              </div>
              <div className="col-md-4">
                <h6>Helloo</h6>
              </div>
              <div className="col-md-4">
                <h6>Helloo</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h6>
                  <strong className="x mr-1">Hey:</strong>Helloo
                </h6>
              </div>
              <div className="col-md-4">
                <h6>
                  <strong className="x mr-1">Hey:</strong>Helloo
                </h6>
              </div>
              <div className="col-md-4">
                <h6>
                  <strong className="x mr-1">Hey:</strong>Helloo
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardReferrals;