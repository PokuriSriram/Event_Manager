import React from 'react'
import{BrowserRouter,Routes,Route} from'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Events from './Pages/Events';
import Layout from './components/Layout';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Register from './Pages/Register';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

  <Route element={<Layout />}>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home />} />
    <Route index element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>
    </BrowserRouter>
  )
}

export default App