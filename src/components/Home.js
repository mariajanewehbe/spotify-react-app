import React from "react";
import { connect } from "react-redux";
import { FaSpotify } from "react-icons/fa";
import Header from "./Header";

const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URI } = process.env;

const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=token&show_dialog=true`;
  };

const Home = (props) => {
  return (
    <div className="login">
      <Header />
      <button
        className="login-button"
        variant="info"
        type="submit"
        onClick={handleLogin}
      >
        <p className="login-text">Login</p>
        <FaSpotify className="Spotify-icon"></FaSpotify>
      </button>
    </div>
  );
};

export default connect()(Home);
