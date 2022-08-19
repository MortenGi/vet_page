import "./App.css";
import { Box } from "@chakra-ui/react";

import Navigation from "./01_Navigation";
import Leistungen from "./02_Leistungen";
import Sprechstunden from "./03_Sprechstunden";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Leistungen />

      {/*<header className="App-header">
        <Box display="grid" gridAutoFlow="row dense">
          Tierarztpraxis Dr. Jens Giese
        </Box>
  </header>*/}
      <Sprechstunden />
    </div>
  );
}

export default App;
