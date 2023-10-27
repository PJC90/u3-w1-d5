import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import NavbarNetflix from './Components/NavbarNetflix'
import TitlePage from './Components/TitlePage'
import FooterNetflix from './Components/FooterNetflix'
import Galleria from './Components/Galleria'
import Account from './Components/Account'

function App() {
  return (
    <>
      <NavbarNetflix />
      <TitlePage />
      {/* <Account /> */}
      <Galleria title="Trending Now" searchFilm="lupin" />
      <Galleria title="Watch it Again" searchFilm="boris" />
      <Galleria title="New Releases" searchFilm="breaking bad" />
      <FooterNetflix />
    </>
  )
}

export default App
