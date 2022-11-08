import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Assets/filmesLg.png'

function Header() {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo'/>
      </Link>
      <Link to='favorites' className='favorites'>Meus Filmes</Link>
    </header>
  )
}

export default Header