import React,{useEffect,useState,useRef} from 'react'
import axiosApi from '../../axios/api'
import Head from '../../Component/Head/Head'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Home=()=>{
    const[filmes,setFilmes]=useState([]);
    const[loading,setLoading]=useState(false);
    const carrousel=useRef();
    const[width,setWidth]=useState(0)

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

    useEffect(()=>{
        setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth)
    },[])

    return(
       <div className='Container'>
        <Head title='Movies HD'/>
        {loading && <h2 className='loading'>Carregando..</h2>}
        <motion.div ref={carrousel} className='carrousel' whileTap={{cursor:"grabbing"}}>
            <motion.div className='inner' drag="x"
            dragConstraints={{right:0,left: - width}}
            initial={{x:100}}
            animate={{x:0}}
            transition={{duration:0.8}}>

        {filmes.map((movies)=>(
            <motion.article key={movies.id} className='movies'>
                <motion.div className='item'>
                <strong className='title_movie'>{movies.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt=''/>
                <Link to={`/films/${movies.id}`}>Acessar</Link>
                </motion.div>
            </motion.article>
        ))}
        </motion.div>
        </motion.div>
       </div>
    )
}

export default Home