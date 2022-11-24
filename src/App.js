import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleCardPage from "./pages/SingleCardPage/index";
import { totalData } from "./redux/action/cardAction";

const App = () => {
  const dispatch = useDispatch();

  const getPostData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_page=0&_limit=20"
      );
      dispatch(totalData(await response.json()));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/details/:id" element={<SingleCardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
