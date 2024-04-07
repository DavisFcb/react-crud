import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header.jsx";
import CaseView from "./components/case-view/case-view.jsx";
import CaseEdit from "./components/case-edit/case-edit.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CaseView />}></Route>
          <Route
            path="/case-update"
            element={<CaseEdit />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
