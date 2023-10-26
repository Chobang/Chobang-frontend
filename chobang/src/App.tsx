// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import { routers } from "./router";

// import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
