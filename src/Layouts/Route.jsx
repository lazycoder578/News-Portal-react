import React from "react";
import { Outlet } from "react-router-dom";

export default function Route() {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Outlet />
    </div>
  );
}
