import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import worker from "./mocks/browser";

import { Header, MainContainer } from "./App.styled";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

function App() {
  return (
    <MainContainer>
      <Header>Mercedes Coding Challenge</Header>
      <Outlet />
    </MainContainer>
  );
}

export default App;
