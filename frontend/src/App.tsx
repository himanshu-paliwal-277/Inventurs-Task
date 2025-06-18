import React, { memo } from "react";
import UsersList from "./components/UsersList/UsersList";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
};

export default memo(App);
