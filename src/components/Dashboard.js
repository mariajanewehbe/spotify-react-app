import React from "react";
import { initiateGetResult } from "../actions/result";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";
import Header from "./Header";

const Dashboard = (props) => {
  const handleSearch = (searchKey) => {
    props.dispatch(initiateGetResult(searchKey));
  };

  const {artists} = props;
  const result = {artists};

  return (
    <React.Fragment>
      <div className="search-container">
        <Header />
        <SearchForm handleSearch={handleSearch} />
      </div>
      <div className="searchResult-container">
        <SearchResult result={result} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  };
};

export default connect(mapStateToProps)(Dashboard);
