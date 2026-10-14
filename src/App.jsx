import {Routes, Route, Link} from 'react-router';
import Home from './pages/Home';
import Media from './pages/Media';
import Services from './pages/Services';
import './App.css'

function App() {
  return(
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/media" element={<Media/>}/>
      </Routes>
    </>
  
  )
}

export default App
