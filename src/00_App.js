import "./App.css";

import Navigation from "./01_Navigation";
import Leistungen from "./02_Leistungen";
import Sprechstunden from "./03_Sprechstunden";
import Urlaub from "./05_Urlaub";

function App() {
  return (
    <div id="App">
      <Navigation />

      <Sprechstunden />
      <Leistungen />
    </div>
  );
}

export default App;
