import "./App.css";
import { Box } from "@chakra-ui/react";
import { useState, useRef, useCallback, useEffect } from "react";

import Navigation from "./01_Navigation";
import Leistungen from "./02_Leistungen";
import Sprechstunden from "./03_Sprechstunden";
import Kontakt from "./04_Kontakt";

function App() {
  return (
    <div id="App">
      <Navigation />
      <Leistungen />
      <Sprechstunden />
      <Kontakt />
    </div>
  );
}

export default App;
