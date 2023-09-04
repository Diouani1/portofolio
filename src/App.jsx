import "./App.css";
import { Route, Routes } from "react-router-dom";
import Englishcomponent from "./component/english/Englishcomponent";
import Germancomponent from "./component/german/Germancomponent";
import Arabiccomponent from "./component/arabic/Arabiccomponent";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Englishcomponent />} />
        <Route path="/german/*" element={<Germancomponent />} />
        <Route path="/arabic/*" element={<Arabiccomponent />} />
        <Route path="*" element={<Englishcomponent />} />
      </Routes>
    </div>
  );
}

export default App;
