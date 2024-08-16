import React from 'react';
import { Editor } from '@monaco-editor/react';
import '../../public/styles/editor.css'; // Import the CSS file

const MonacoEditorComponent = () => {
  const handleEditorChange = (value, event) => {
    console.log('Editor value:', value);
  };

  return (
    <div className="monaco-editor-container"> {/* Apply the container class */}
      <Editor
        className="monaco-editor" // Apply the editor class
        height="100%"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={handleEditorChange}
        theme="vs-dark" // Optional: choose a theme
        options={{
          minimap: {
            enabled: false // Disable the minimap
          }
        }}
      />
    </div>
  );
};

export default MonacoEditorComponent;
