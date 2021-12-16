import React from 'react'

const TabItem = ({ tab, active, openTab }) => {

  const { title, description, id} = tab;

  return (
    <div
      className={`tab ${active === id ? "active" : ""}`}
      onClick={() => openTab(id)}
    >
      <input id="tab-one" type="checkbox" name="tabs" />
      <label htmlFor="tab-one">{title}</label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TabItem
