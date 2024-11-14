 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { ToastContainer, Bounce } from "react-toastify";
import Footer from './Components/Footer';

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
<Footer/>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
          transition={Bounce}
        />

    </>
  )
}

export default App
