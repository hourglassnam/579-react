import React from "react";

const ProfileCard = ({ onAddClick }) => {
  return (
    <div className="jat-hero">
      <div className="jat-hero-img">
        <img src="/avatar.png" alt="avatar" />
      </div>

      <div className="jat-hero-body">
        <div className="jat-title">Ji Young Nam (jynam)</div>

        <div className="jat-bullets">
          <div className="jat-bullet">
            <div className="jat-dot" />
            💼{" "}
            <a
              href="https://www.linkedin.com/in/jiyoungnam/"
              target="_blank"
              rel="noreferrer"
              className="jat-link"
            >
              LinkedIn
            </a>
          </div>

          <div className="jat-bullet">
            <div className="jat-dot" />
            📝{" "}
            <a
              href="https://drive.google.com/file/d/1ZSWTxIYCg6ThEW0UHYECTY4UMP_txTwJ/view"
              target="_blank"
              rel="noreferrer"
              className="jat-link"
            >
              Resume
            </a>
          </div>

          <div className="jat-bullet">
            <div className="jat-dot" />
            🎨{" "}
            <a
              href="https://www.jiyoungnam.com/"
              target="_blank"
              rel="noreferrer"
              className="jat-link"
            >
              Portfolio
            </a>
            {/* <span className="label-text">Portfolio</span> */}
          </div>
        </div>

        <button
          type="button"
          className="jat-cta"
          onClick={onAddClick}
        >
          Record Application
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
