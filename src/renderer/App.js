import React from 'react';
import LeftSidebar from './components/Leftsidebar';
import MonacoEditorComponent from '../src/components/MonacoEditor';


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftSidebar />
        <div className="area" style={{ flex: 1, overflow: 'hidden' }}>
          {/* Main content goes here */}
          <MonacoEditorComponent />
        </div>
      </div>
    </div>
  );
}

export default App;

