import React from "react";

import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import Logo from "../../assets/imgs/Done.svg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="container-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="container-content">
        <div className="container-content-title">
          <span>Welcome to</span>
          <h2>OUR REMINDER</h2>
        </div>
        <div className="container-content-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
          </p>
        </div>
      </div>
      <div className="container-button">
        <Link to="/registration">
          <button className="btn-getStart">
            <p>Get Started</p>
            <ArrowRightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
}
