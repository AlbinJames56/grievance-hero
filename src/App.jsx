 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { ToastContainer, Bounce } from "react-toastify";
import Footer from './Components/Footer';
import About from './Pages/About';
import GrievanceSubmissionPage from './Pages/GrievanceSubmissionPage';
import Header from './Components/Header';
import Auth from './Pages/Auth';

function App() {
  
  return (
    <>
     <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/grievance" element={<GrievanceSubmissionPage/>} />
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
