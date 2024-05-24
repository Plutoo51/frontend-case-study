import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sort-by">
        <h3>Sort By</h3>
        <ul>
          <li><input type="radio" name="sort" /> Old to new</li>
          <li><input type="radio" name="sort" /> New to old</li>
          <li><input type="radio" name="sort" /> Price high to low</li>
          <li><input type="radio" name="sort" /> Price low to high</li>
        </ul>
      </div>
      <div className="brands">
        <h3>Brands</h3>
        <input type="text" placeholder="Search" />
        <ul>
          <li><input type="checkbox" /> Apple</li>
          <li><input type="checkbox" /> Samsung</li>
          <li><input type="checkbox" /> Huawei</li>
        </ul>
      </div>
      <div className="models">
        <h3>Model</h3>
        <input type="text" placeholder="Search" />
        <ul>
          <li><input type="checkbox" /> 11</li>
          <li><input type="checkbox" /> 12 Pro</li>
          <li><input type="checkbox" /> 13 Pro Max</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
