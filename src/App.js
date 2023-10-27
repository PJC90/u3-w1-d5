import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import NavbarNetflix from './Components/NavbarNetflix'
import TitlePage from './Components/TitlePage'
import FooterNetflix from './Components/FooterNetflix'
import Galleria from './Components/Galleria'

function App() {
  return (
    <>
      <NavbarNetflix />
      <TitlePage />
      <Galleria title="Trending Now" searchFilm="lupin" />
      <Galleria title="Watch it Again" searchFilm="boris" />
      <Galleria title="New Releases" searchFilm="breaking bad" />
      <FooterNetflix />
    </>
  )
}

export default App
