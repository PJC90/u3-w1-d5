import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import NavbarNetflix from './Components/NavbarNetflix'
import TitlePage from './Components/TitlePage'
import FooterNetflix from './Components/FooterNetflix'
import Galleria from './Components/Galleria'

function App() {
  return (
    <div>
      <NavbarNetflix />
      <TitlePage />

      <Galleria title="Trending Now" />
      <Galleria title="Watch it Again" />
      <Galleria title="New Releases" />
      <FooterNetflix />
    </div>
  )
}

export default App
