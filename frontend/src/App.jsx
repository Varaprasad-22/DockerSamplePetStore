import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/header';
import Home from './pages/home';
import AddItem from './pages/addItem';
import Footer from './pages/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addItem" element={<AddItem/>}/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
