import './App.css';
import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import RegisterPWD from './components/RegisterPWD';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [showModal, setShowModal] = useState(false);

  // Handlers to show and hide the modal
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  return (
    <div className="App d-flex" style={{ height: '100vh', display: 'flex' }}>
      <div className="sidebar" style={{ width: '250px', backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
        <Sidebar onShowModal={handleShow} />
      </div>
      <div className="mx-5 flex-fill d-flex justify-content-center align-items-center">
        <Dashboard />
      </div>

      {/* Render the RegisterPWD modal */}
      <RegisterPWD show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default App;
