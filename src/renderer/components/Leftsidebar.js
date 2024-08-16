import React from 'react';
import '../../public/styles/editorSidebar.css'; // Import the CSS file

const LeftSidebar = () => {
  return (
    <nav className="main-menu">
      <>
        <li>
          <a href="#">
            <span className="nav-icon"><i className="fa-solid fa-plus"></i></span>
            <span className="nav-text">Add</span>
          </a>
        </li>
        </>
    </nav>
  );
};

export default LeftSidebar;
