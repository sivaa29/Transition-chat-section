import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails';
import ChatSection from './components/ChatSection/ChatSection';
import ActionLauncher from './components/ActionLauncher/ActionLauncher';
import CaseFavorites from './components/CaseFavorites/CaseFavorites';
import AskCatura from './components/AskCatura/AskCatura';
import './App.css';

const App = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <UserDetails />
          <ChatSection />
          <div className="right-section">
            <AskCatura />
            <ActionLauncher />
            <CaseFavorites />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
