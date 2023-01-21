import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Login from './Components/Login/Login'
import NavBar2 from './Components/NavBar/NavBar'
import RandomCats from './Components/RandomCats/RandomCats'
import RandomDogs from './Components/RandomDogs/RandomDogs'
import RandomUsers from './Components/RandomUsers/RandomUsers'
import { AuthProvider } from './Provider/auth'
import Customers from './Components/Customers/Customers'



const App = () => {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='' element={<NavBar2 />}>
            <Route path='randomUsers' element={<RandomUsers />} />
            <Route path='randomCats' element={<RandomCats />} />
            <Route path='randomDogs' element={<RandomDogs />} />
            <Route path='customers' element={<Customers />} />

          </Route>


          <Route path='*' element={<h1>404 - Not Found!</h1>} />

        </Routes>



      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
