import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ApplicationGrid from "./components/ApplicationGrid";
import AddApplicationModal from "./components/AddApplicationModal";
import ApplicationDetailModal from "./components/ApplicationDetailModal";

const MAX_SLOTS = 9;

function App() {
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null); // 👈 알 상세용

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveApp = (data) => {
    if (applications.length < MAX_SLOTS) {
      setApplications([...applications, data]);
    }
  };

  const handleEggClick = (app) => {
    setSelectedApp(app);
  };

  const closeDetail = () => {
    setSelectedApp(null);
  };

  return (
    <div className="jat-page">
      {/* 🔹 여기서 전체 제목 추가 */}
      <header className="jat-header">
        <h1 className="jat-app-title">Application Tracker</h1>
      </header>

      <main className="jat-container">
        <section className="jat-card jat-app-card">
          <ProfileCard onAddClick={openModal} />

          <ApplicationGrid
            applications={applications}
            maxSlots={MAX_SLOTS}
            onEmptySlotClick={openModal}
            onEggClick={handleEggClick}   // 👈 알 클릭 핸들러 전달
          />
        </section>

        {isModalOpen && (
          <AddApplicationModal onSave={saveApp} onCancel={closeModal} />
        )}

        {selectedApp && (
          <ApplicationDetailModal app={selectedApp} onClose={closeDetail} />
        )}
      </main>
    </div>
  );
}

export default App;
