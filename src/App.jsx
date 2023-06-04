import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Episodes from './pages/Episodes/Episodes'
import Homepage from './pages/Homepage/Homepage'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'


function App() {

  return (
    <BrowserRouter>
    <ThemeContextProvider>

      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:characterId' element={<CharacterDetails />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>
      
      <Footer />

    </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App;
