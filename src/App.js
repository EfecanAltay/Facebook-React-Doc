import React from 'react';
import './styles/App.css';
import Sidebar from './sections/sidebar.tsx';
import Topbar from './sections/topbar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Topbar></Topbar>
    </div>
  );
}

export default App;
