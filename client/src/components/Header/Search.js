import React from "react";
import axios from "axios";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(e) {
    this.setState({
      typing: e.target.value,
    });

    const res = await axios.post("/api/products/search", {
      searchTerm: e.target.value,
    });
    console.log(res.data);
  }
  render() {
    return (
      <div id="header-search" className="col">
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
          <div className="search-output tertiary-background"></div>
        ) : null}
      </div>
    );
  }
}

export default Search;
