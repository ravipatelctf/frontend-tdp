import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home";


export default function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
    <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}

