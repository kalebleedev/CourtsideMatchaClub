import {Routes, Route, Link} from 'react-router';
import Home from './pages/Home';
import Media from './pages/Media';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return(
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  
  )
}

export default App
