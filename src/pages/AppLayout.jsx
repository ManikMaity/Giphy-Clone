import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function AppLayout() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container marker px-8 py-3 mx-auto">
        <Header/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
