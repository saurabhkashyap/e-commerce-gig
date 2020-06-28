import React from "react";
import "./Search.css";
import { fetchProducts } from "../../redux/actions";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(e) {
    this.setState({
      typing: e.target.value
    });

    this.props.fetchProducts(e.target.value);
  }
  render() {
    return (
      <div id={this.props.id} className="col">
        <div className="input-group">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control header-input-search"
            placeholder="bata shoes"
          />
          <div className="input-group-append">
            <button id="header-search-btn" className="primary-button">
              <i className="fa fa-search " style={{ fontSize: "25px" }}></i>
              <span>Search</span>
            </button>
          </div>
        </div>
        {this.state.typing !== "" ? (
          <div className="search-output tertiary-background">
            <h2>checking</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(null, { fetchProducts })(Search);
