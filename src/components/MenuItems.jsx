import React, { useState, useRef, useEffect } from "react";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  let timeout = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    // Clear any existing timeout
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    // Add a small delay before closing
    timeout.current = setTimeout(() => {
      window.innerWidth > 960 && setDropdown(false);
    }, 150);
  };

  const handleItemClick = (e, url) => {
    // If it's a phone number, let the default behavior happen
    if (url && url.startsWith('tel:')) {
      return;
    }
    
    // For other links, prevent default and navigate
    e.preventDefault();
    if (url) {
      window.location.href = url;
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <li
      className="menu-item"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={toggleDropdown}
            className="menu-button"
          >
            {items.icon && <span className="menu-icon">{items.icon}</span>}
            <span className="menu-text">{items.title}</span>
            <span className="dropdown-arrow">▼</span>
          </button>
          <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {items.submenu.map((submenu, index) => (
              <MenuItems
                items={submenu}
                key={index}
                depthLevel={depthLevel + 1}
              />
            ))}
          </ul>
        </>
      ) : (
        <a 
          href={items.url || '#'} 
          onClick={(e) => handleItemClick(e, items.url)}
          className="menu-link"
        >
          {items.icon && <span className="menu-icon">{items.icon}</span>}
          <span className="menu-text">{items.title}</span>
        </a>
      )}
    </li>
  );
};

export default MenuItems;