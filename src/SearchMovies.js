
function SearchMovies(){

    const searchMovies = async (e) =>{
        const query = "Uncharted"
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/movie/550?api_key=d95268f3ac9a1d99c7d16d16cd5b3dd5&language=en-US&query=${query}&page=1&include_adult=false`;

        try{const res =await fetch(url);
        const data = await res.json();
        console.log(data)
        }catch(err){
            console.log(err)
        }   
    }
    return(
            <form className="form" onSubmit={searchMovies}> 
            <label className="label" htmlFor="query" >Movie Name</label>
            <input  className="input" type="text" name="query" placeholder="Search Movies Here"></input>
            <button className="button" type="submit">Search</button>
            </form>
        
    )
}


export default SearchMovies;