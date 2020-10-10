import React from 'react';
import './App.css';
import Sidebar from './sections/sidebar.tsx';
import Topbar from './sections/topbar';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar className="sidebar" />
    </div>
  );
}

export default App;
