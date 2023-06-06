import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Episodes from "./pages/Episodes/Episodes";
import Footer from "./components/Footer/Footer";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import FavoritesContextProvider from "./contexts/FavoritesContext";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <FavoritesContextProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/details/:characterId"
              element={<CharacterDetails />}
            />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>

          <Footer />
        </FavoritesContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
