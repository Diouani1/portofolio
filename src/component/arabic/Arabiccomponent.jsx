import React from "react";
import { Route, Routes } from "react-router-dom";

import Navcomponent from "./navcomponent/Navcomponent";
import Maincomponent from "./maincomponent/Maincomponent";
import Aboutcomponent from "./aboutcomponent/Aboutcomponent";
import Contactcomponent from "./contactcomponent/Contactcomponent";
import Footercomponent from "./footercomponent/Footercomponent";

function Arabiccomponent() {
  return (
    <div>
      <Navcomponent />
      <Routes>
        <Route path="/arabic" element={<Maincomponent />} />
        <Route path="/about" element={<Aboutcomponent />} />
        <Route path="/contact" element={<Contactcomponent />} />
        <Route path="*" element={<Maincomponent />} />
      </Routes>

      <Footercomponent />
    </div>
  );
}

export default Arabiccomponent;
