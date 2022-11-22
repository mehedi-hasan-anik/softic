import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleCardPage from "./pages/SingleCardPage/index";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/details/:id" element={<SingleCardPage />} />
      </Routes>
    </div>
  );
};

export default App;
