import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

function App() {
  return (
    <div className="WeatherApp">
     <Dashboard></Dashboard>
    </div>
  );
}

export default App;
