import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Listas from './components/Catálogo';
import Banner from './components/Banner-destaque';
import Cabecalho from './components/Cabecalho';

const App= () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(()=> {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
       if(window.scrollY > 10) {
         setBlackHeader(true);
       } else {
         setBlackHeader(false);
       }
    }

    window.addEventListener(`scroll`, scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
  return(
    <div className="page">

      <Cabecalho black={blackHeader} />

      {featuredData &&
        <Banner item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key)=>(
          <Listas key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
      <div className='rodape'> 
     <span className='rodape-copyright'>Copyright@{new Date().getFullYear()}</span>
    <div>
    Criado por Gabriel Valentim
      </div> 
    Dados pegos do site Themoviedb.org
     </div>
     </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg" alt="Carregando" />
      </div>
}
    </div>
  );
}
export default App;