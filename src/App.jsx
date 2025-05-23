
import { Route, Routes } from 'react-router-dom';
import './css/App.css'; 
import Home from './pages/home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
function App() {

  return (

    <div>
      <NavBar></NavBar>
    <main className='main-content'>
      <Routes>
        <Route path ="/" element = {<Home/>}></Route>
        <Route path="/test" element={<div>TEST ROUTE</div>} />
        <Route path='/favorites' element ={<Favorites></Favorites>}></Route>
      </Routes>
    </main>
   </div>
  )
}

export default App
