import React from "react";
import "../css/footer-bar.css";

const FooterBar = () => {
  return (
    <div className="FooterBackground">
      <div>Take a Beer</div>
      <div className="FooterContainer">
        <div className="FooterBox">
          <div style={{ marginBottom: "10px", fontSize: "20px" }}>
            Developers
          </div>
          <div>Team.Learnus</div>
        </div>
        <div className="FooterBox">
          <div style={{ marginBottom: "10px", fontSize: "20px" }}>
            Contact Us
          </div>
          <div>Team.Learnus</div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
