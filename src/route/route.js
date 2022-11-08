import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Filmes from '../pages/Films/Films'
import Favorites from '../Component/Favorites/Favorites'
import Error from '../pages/Error/Error'

function route() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/films/:id' element={<Filmes/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    
    <Route path='*' element={<Error/>}/>
   </Routes>
  )
}

export default route