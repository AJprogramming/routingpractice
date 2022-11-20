import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/welcome";
import Input from "./components/theInputIs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:input" element={<Input />} />
          <Route path="/:input/:color/:background" element={<Input />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
