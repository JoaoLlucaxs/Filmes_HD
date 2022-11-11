import React,{useEffect,useState} from 'react'
import axiosApi from '../../axios/api'
import Head from '../../Component/Head/Head'
import {Link} from 'react-router-dom'

const Home=()=>{
    const[filmes,setFilmes]=useState([]);
    const[loading,setLoading]=useState(false);

 
    useEffect(()=>{
        async function requisicao(){
            setLoading(true)
            const response=await axiosApi.get('/movie/now_playing',{
                params:{
                    api_key:'21eeaae1ea766ad764a8f795d6f7b05f',
                    language:'pt-BR',
                    page:1
                }
            
            })
            const json=response.data.results
            setLoading(false)
           setFilmes(json)
           
        }
        requisicao();
    },[])

    return(
       <div className='Container'>
        <Head title='Movies HD'/>
        {loading && <h2 className='loading'>Carregando..</h2>}
       
        
        {filmes.map((movies)=>(
            <article key={movies.id} className='movies'>
                <div className='item'>
                <strong className='title_movie'>{movies.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt=''/>
                <Link to={`/films/${movies.id}`}>Acessar</Link>
                </div>
            </article>
        ))}
       
        </div>
    )
}

export default Home