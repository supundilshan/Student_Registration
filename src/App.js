import React, {component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbarComponent";
import Create from "./components/createComponent";
import Edit from "./components/editComponent";
import Index from "./components/indexComponent";
import Error from "./components/errorComponent"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Index />} />
        <Route path="create" element={<Create />} />
        <Route path="edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
