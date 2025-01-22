import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import ReflectionsPage from "./pages/ReflectionsPage";
import MorePage from "./pages/MorePage";
import Footer from "./components/shared/Footer";
import DonatePage from "./pages/DonatePage";
import AboutPage from "./pages/AboutPage";
import Article from "./components/shared/Article";
import ScrollToTop from "./components/shared/utils/ScrollToTop"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/studies" element={ <StudiesPage /> } />
          <Route path="/reflections" element={ <ReflectionsPage /> } />
          <Route path="/more" element={ <MorePage /> } />
          <Route path="/donate" element={ <DonatePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/articles/:category/:slug" element={ <Article /> } />
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
