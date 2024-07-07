import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Createquiz from "./pages/Createquiz";
import Takequiz from "./pages/Takequiz";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>O
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/createquiz" element={<Createquiz />} />
          <Route path="/takequiz" element={<Takequiz />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
