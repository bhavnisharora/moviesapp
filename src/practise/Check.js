import React, { useState } from 'react'
import axios from 'axios'
const Check = () => {
  const [text, settext] = useState("");
  const [movie, setmovie] = useState([]);
  const getdata = (e) => {
    e.preventDefault()
    try {
      axios.get(`https://www.omdbapi.com/?s=${text}&apikey=e99c1d7c`)
        .then((response) => {
          console.log(response)
          setmovie(response.data.Search)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  const getinput = (e) => {
    settext(e.target.value)
  }
  return (
    <>
      <h1>moviesapp</h1>
      <form action="" onSubmit={getdata}>
        <input type="text" onChange={getinput} />
        <input type="submit" value="submit" disabled={text.length === 0} />
      </form>
      {
        movie && movie.length > 0 && <h3>here are some results</h3>
      }
      <div className="card-container">
        {movie?.length > 0 &&
          movie.map((val, id) => {
            return (
              <>
                <div className="cards" key={id}>
                  <img src={val.Poster} alt="" />
                  <h3>{val.Title}</h3>
                  <h4>{val.Year}</h4>
                </div>
              </>
            )
          })
        }
      </div>
      {
        !movie && <p> not found</p>
      }
    </>
  )
}

export default Check
