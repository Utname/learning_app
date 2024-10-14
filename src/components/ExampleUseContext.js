import React, { useEffect, useState } from "react";
import Header from "./use_context/Header";
import Sidebar from "./use_context/Sidebar";
import { AppProvider } from "../Context/AppContext";
import Content from "./use_context/Content";

export default function ExampleUseContext() {
  return (
    <div className="ExampleUseContext">
      <AppProvider>
        <Header></Header>
        <Content></Content>
        {<Sidebar></Sidebar>}
      </AppProvider>
    </div>
  );
}
