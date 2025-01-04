import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Studies from "./pages/Studies";
import Reflections from "./pages/Reflections";
import Discipleship from "./pages/Discipleship";
import More from "./pages/More";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/studies" element={ <Studies /> } />
          <Route path="/reflections" element={ <Reflections /> } />
          <Route path="/discipleship" element={ <Discipleship /> } />
          <Route path="/more" element={ <More /> } />
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
