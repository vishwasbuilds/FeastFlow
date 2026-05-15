import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Bringing the city's finest flavors directly to your table. From
          artisanal street food to gourmet delicacies, FeastFlow bridges the gap
          between top-tier kitchens and your doorstep with speed and precision.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
