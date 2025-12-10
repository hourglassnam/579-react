import React from "react";

const ApplicationGrid = ({
  applications,
  maxSlots,
  onEmptySlotClick,
  onEggClick,
}) => {
  const slots = Array.from({ length: maxSlots });

  return (
    <div className="jat-egg-grid">
      {slots.map((_, index) => {
        const app = applications[index];

        if (app) {
          return (
            <button
              type="button"
              className="jat-egg-slot filled"
              key={index}
              onClick={() => onEggClick(app)}   // 👈 알 클릭시 정보 전달
            >
              <img
                // src="/egg.png"
                src={process.env.PUBLIC_URL + "/egg.png"}
                alt="application egg"
                className="jat-egg-img"
              />
              <p className="jat-egg-company">{app.company}</p>
            </button>
          );
        }

        return (
          <button
            type="button"
            key={index}
            className="jat-egg-slot empty"
            onClick={onEmptySlotClick}
          >
            <img
            //   src="/plus.svg"
              src={process.env.PUBLIC_URL + "/plus.svg"}
              alt="add application"
              className="jat-plus-icon"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ApplicationGrid;
