import { useState } from "react";
import Cards from "./Card";

function SearchMovies(){

    const [query,setQuery] =useState("");
    const [movies,setMovies] = useState([]);


    const searchMovies = async (e) =>{
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d95268f3ac9a1d99c7d16d16cd5b3dd5&language=en-US&query=${query}&page=1&include_adult=false`;

        try{const res =await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        }catch(err){
            console.log(err)
        }   
    }
    return(
        <>
            <form className="form" onSubmit={searchMovies}> 
            <label className="label" htmlFor="query" >Movie Name</label>
            <input  className="input" 
                    type="text" 
                    name="query" 
                    placeholder="Search Movies Here"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies
                    .filter(movie=> movie.poster_path)
                    .map(movie => (
                    <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </>
        
    )
}


export default SearchMovies;