import React from "react";

const ApplicationDetailModal = ({ app, onClose }) => {
  const { company, position, date } = app;

  return (
    <div className="jat-modal-backdrop">
      <div className="jat-modal-card jat-detail-card">
        <div className="jat-hero jat-detail-hero">
          {/* 왼쪽 알 이미지 */}
          <div className="jat-hero-img jat-detail-egg">
            <img src={process.env.PUBLIC_URL + "/egg.png"} alt="application egg" />
          </div>

          {/* 오른쪽 텍스트 */}
          <div className="jat-hero-body jat-detail-body">
            <div className="jat-title">{company || "Unknown company"}</div>

            <p className="jat-detail-line">
              <span className="jat-detail-label">Position</span>
              <span className="jat-detail-value">
                {position || "—"}
              </span>
            </p>

            <p className="jat-detail-line">
              <span className="jat-detail-label">Date</span>
              <span className="jat-detail-value">
                {date || "—"}
              </span>
            </p>
          </div>
        </div>

        <div className="jat-modal-actions">
          <button
            type="button"
            className="jat-btn-primary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailModal;
