import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Home from './pages/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Navbar/>

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<Cart/>} />
    <Route path='/contact' element={<PlaceOrder/>} />

   </Routes>
      
        
    </div>
  )
}

export default App
