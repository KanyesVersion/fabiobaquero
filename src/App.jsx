import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import ReflectionsPage from "./pages/ReflectionsPage";
import DiscipleshipPage from "./pages/DiscipleshipPage";
import MorePage from "./pages/MorePage";
import Footer from "./components/Shared/Footer";
import RefArt0Page from "./pages/RefArt0Page";

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
          <Route path="/reflections/art-0" element={ <RefArt0Page /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* structure the site according to content, pending */}
      {/* audio recordings of studies, text (reflections and "studies with history and analysis") (discipleship), short reels */}
      {/* beige, reddish brown */}
    </>
  )
}

export default App
