import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/about`} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
