import axios from "axios";
import { useState } from "react";
import './App.css'
function App() {


  const [text, settext] = useState("search Movie")
  const [movie, setmovie] = useState([])

  const changetext = (event) => {
    settext(event.target.value);
  }

  const getmovie = (e) => {
    e.preventDefault();
    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=e99c1d7c`)
      .then((response) => {
        console.log(response);
        setmovie(response.data.Search)
      })
  }
  return (
    <>



      <h1 className="heading_style"> Netflix 2.0</h1>
      <form action="" onSubmit={getmovie}>
        <input type='search' placeholder = "search movie" value={text} onChange={changetext} className='search-box'/>
        <input type="submit"/>
      </form>

      <div className="container my-3">

        <div className="row">

          {
            movie.map((value, index) => {
              return (
                <>
                
                  <div className="col-3">
                    <div class="cardName" style={{ Width: '18rem' }}>
                      <img src={value.Poster} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.Year}</h5>
                        <h3 className="card-title">{value.Title}</h3>

                        <a href="/" className="btn btn-danger">click here to watch</a>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>

    </>
  );
}

export default App;
