import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorBoundaryUI from "../components/ErrorBoundary/CustomErrorBoundary";

function AppLayout() {
  return (
    <ErrorBoundary
    FallbackComponent={CustomErrorBoundaryUI}
    onReset={() => {}}
    >
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container marker px-3 md:px-8 py-3 mx-auto">
        <Header/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
    </ErrorBoundary>
  );
}

export default AppLayout;
