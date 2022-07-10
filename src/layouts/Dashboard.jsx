import React from "react";
import { Navigation1 } from "./Navigation1";
import { Navigation2 } from "./Navigation2";

export const Dashboard = () => {
  return (
    <div className="dashboard bg-tahiti">
      <Navigation1 />
      <Navigation2 />
      <ProductCart />
    </div>
  );
};
