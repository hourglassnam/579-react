import React, { useState } from "react";

const AddApplicationModal = ({ onSave, onCancel }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!company.trim()) {
      return;
    }

    onSave({
      company: company.trim(),
      position: position.trim(),
      date,
    });
    onCancel();
  };

  return (
    <div className="jat-modal-backdrop">
      <div className="jat-modal-card">
        <h2 className="jat-modal-title">New Application</h2>

        <form className="jat-form" onSubmit={handleSubmit}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            className="jat-input"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />

          <label htmlFor="position">Position</label>
          <input
            id="position"
            className="jat-input"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />

          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            className="jat-input"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />

          <div className="jat-modal-actions">
            <button
              type="button"
              className="jat-btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="jat-btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplicationModal;
