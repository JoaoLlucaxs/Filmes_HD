import React ,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


function Favorites() {
    const[movies,setMovies]=useState([])

    useEffect(()=>{
        const saveLocal=localStorage.getItem('@movies')
        setMovies(JSON.parse(saveLocal || []))
    },[])


  return (
    <div className='my_films'>
        <h1>Meus Filmes</h1>
        {movies.length === 0 && <span>Você não possui filmes salvos 😢</span>}
        <ul>
            {movies.map((movie)=>{
                return(
                    <li key={movie.id}>
                        <span>{movie.title}</span>

                    <div>
                        <Link to={`/films/${movie.id}`}>
                            Ver Detalhes
                        </Link>
                    </div>
                    </li>
                    
                )
            })}
        </ul>
    </div>
  )
}

export default Favorites