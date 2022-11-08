import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from '../../axios/api'
import { FiStar } from "react-icons/fi";

function Filmes() {
  const {id}=useParams();
  const navigate=useNavigate()
  const[films,setFilms]=useState({})
  const[load,setLoad]=useState(true)

  useEffect(()=>{
    async function detailsmovie(){
      await axios.get(`/movie/${id}`,{
        params:{
          api_key:'21eeaae1ea766ad764a8f795d6f7b05f',
          language:'pt-BR'
        }
      }).then((response)=>{
       
        setLoad(false)
        setFilms(response.data)
       
      })
      .catch((err)=>{
        navigate('/',{replace:true})
        return
      })
    }
    detailsmovie();
  },[id,navigate])

  const saveMovies=()=>{
   
      const moviesStorage=localStorage.getItem('@movies');
      const parse=JSON.parse(moviesStorage|| []);
      const hasmovie=parse.some( (filmesSalvo) => filmesSalvo.id === films.id)
  
      if(hasmovie){
        alert('Já existe')
        return;
      }
      parse.push(films);
      localStorage.setItem('@movies',JSON.stringify(parse));
      alert('filme salvo com sucesso')
  }

  return (
    <div className='info'>
    {load && <h2>CARREGANDO DETALHES...</h2>}
   
      <h1>{films.title}</h1>
    <img src={`https://image.tmdb.org/t/p/original/${films.backdrop_path}`} alt=''/>
    <h3>Sinopse</h3>
    <span>{films.overview}</span>
    <strong>Avaliação <FiStar color=''/> {films.vote_average}</strong>

    <div className='btn'>
      <button onClick={saveMovies}>Salvar</button>
      <button>
        <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${films.title} Trailer`}>Trailer</a>
      </button>
    </div>
    </div>
  )
}

export default Filmes