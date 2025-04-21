
import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return <>
  <Outlet/>
  <ToastContainer position='top-center'/>
</>
   
  
}

export default App
