import React, {component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/navbarComponent";
import Create from "./components/createComponent";
import Edit from "./components/editComponent";
import Index from "./components/indexComponent";
import StudentDetail from './components/stuentdetailComponent';
import Error from "./components/errorComponent"
import Student_viewMyData from  "./components/student/Student_viewMyData"
import Teacher_viewstdData from "./components/teacher/Teacher_viewstdData";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="student" element={<Student_viewMyData/>} />
          <Route path="teacher" element={<Teacher_viewstdData/>} />


          <Route path="create" element={<Create />} />
          <Route path="edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
