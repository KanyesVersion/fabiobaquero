import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header.jsx";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import ReflectionsPage from "./pages/ReflectionsPage";
import DiscipleshipPage from "./pages/DiscipleshipPage";
import MorePage from "./pages/MorePage";
import Footer from "./components/shared/Footer";
import RefArt0Page from "./pages/RefArt0Page";
import DonatePage from "./pages/DonatePage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/shared/utils/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/studies" element={ <StudiesPage /> } />
          <Route path="/reflections" element={ <ReflectionsPage /> } />
          <Route path="/discipleship" element={ <DiscipleshipPage /> } />
          <Route path="/more" element={ <MorePage /> } />
          <Route path="/donate" element={ <DonatePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/reflections/art-0" element={ <RefArt0Page /> } />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
      {/* structure the site according to content, pending */}
      {/* audio recordings of studies, text (reflections and "studies with history and analysis") (discipleship), short reels */}
      {/* beige, reddish brown */}
    </>
  )
}

export default App
