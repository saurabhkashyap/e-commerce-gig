import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import SellerImage from "./SellerImage";
import "./SellerDocuments.css";
import { FaTrashAlt } from "react-icons/fa";

class SellerDocuments extends React.Component {
  state = {
    idUploaded: false,
    passportUploaded: false,
  };

  componentDidMount() {
    this.props.proceed(false);
    scroll.scrollToTop();
    if (this.props.sellerImageUrl.length > 1) {
      this.props.proceed(true);
    }
  }

  componentDidUpdate() {
    if (this.props.sellerImageUrl.length > 1) {
      this.props.proceed(true);
    }
  }

  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h3>Please upload valid copies of the following documents.</h3>
        <h4 className="my-2">National ID</h4>
        <SellerImage aspectRatio={[3, 2]} />
        <div className="seller-uploads-wrapper">
          <div>
            <img src="/1.jpg" />
            <div className="seller-uploads-trash-button-wrapper">
              <button className="btn seller-uploads-trash-button">
                <FaTrashAlt />
                <span className="ml-1">Delete</span>
              </button>
            </div>
          </div>
        </div>
        <h4 className="my-2">Profile Photo</h4>
        <SellerImage />
        <div className="seller-uploads-wrapper my-2">
          <img src="/1.jpg" />
          <div className="seller-uploads-trash-button-wrapper">
            <button className="btn seller-uploads-trash-button">
              <FaTrashAlt />
              <span className="ml-1">Delete</span>
            </button>
          </div>
        </div>

        <h3>Helloo World</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sellerImageUrl: state.sellerDetails.sellerImageUrl,
  };
};
export default connect(mapStateToProps)(SellerDocuments);
