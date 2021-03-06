import React from 'react';
import './style.css';

const Banner= ({item}) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date); 
    //variável que pega a data exata
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name);
    } //variável que pega os gêneros da API

    let description = item.overview;
    if(description.length > 138) {
        description = description.substring(0, 138)+'...';
    } //descrição e o tamanho exato dela
    
    return (
        
       <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
       }}>
           <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}
                     <div className="featured--info">
                         <div className="featured--points">{item.vote_average} pontos</div>
                         <div className="featured--year">{firstDate.getFullYear()}</div>
                         <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                     </div>
                     <div className="featured-description">{description}</div>
                     <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">Saiba mais</a>
                     </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    </div>
                    </div> 
                    </div>
       </section>
    );
}
export default Banner;