import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home";
import AddNewTutor from "./pages/AddNewTutor";

export default function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register-as-a-tutor" element={<AddNewTutor />} />
        </Routes>
    </Router>
    <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}

