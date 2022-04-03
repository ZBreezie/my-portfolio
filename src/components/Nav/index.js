import React from 'react';

const Nav = (props) => {

  const {
    navSection,
    selectedNavSection,
    setSelectedNavSection
  } = props;

  return (
    <nav className="nav justify-content-center">
      <ul className="nav nav-pills justify-content-end">
        {navSection.map((section) => (
          <li className="nav-item" key={section}>
            <a style={{color: "white"}} className={`nav-link btn ${selectedNavSection === section && `active`}`} onClick={() => {setSelectedNavSection(section)}}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;