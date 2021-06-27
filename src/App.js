import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieList from './components/MovieList/MovieList';
import './App.css'


export default () => {

const [movieList, setMovieList] = useState([]);


useEffect(() =>{
  const loadAll = async () => {
     //pegando a lista total dos itens
    let list = await Tmdb.getHomeList();
    setMovieList(list);
  }
  loadAll();
}, []);



  return (
    <div className="homePage">
      {/* header */}

      {/* Destaque */}
      
      {/* Listas */}
      <section className="lists">
        {movieList.map((item, key) =>(
          
          <MovieList key={key} title={item.title} items={item.items} /> //component
          
        ))}
      </section>
      
      {/* Footer */}
 
 
    </div>
  );
}