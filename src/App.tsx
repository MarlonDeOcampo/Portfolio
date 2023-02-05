import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/layout";
import Sample from "./pages/Sample";

// Lazy Loaded Components
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sample" element={<Sample />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
