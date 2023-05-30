import React, { useState } from 'react'
import './Movie.css'
import axios from 'axios'
const Movie = () => {
    const [text, settext] = useState(true)
    const [movie, setmovie] = useState([])

    const getdata = (e) => {
        e.preventDefault()
        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=e99c1d7c`)
            .then((res) => {
           
                console.log(res)
                setmovie(res.data.Search)

            })
    }

    const changedata = (e) => {
        settext(e.target.value)
    }
    return (
        <>
            <h1 className='title'>MovieZone</h1>
            <form action="" onSubmit={getdata} className='set-form'>
                <input type="text" placeholder="search a movie" className="input-field" onChange={changedata} />

                <input type="submit" value="search" disabled={text.length === 0} />
            </form>
            <div className="cards-container">

                {
                    movie.map((value) => {

                        return (
                            <>
                                <div className="cards">
                                    <img src={value.Poster} alt="not available" />
                                    <h1>{value.Title.slice(0, 15)}</h1>
                                    <h2 style={{ color: 'blue' }}>{value.Year}</h2>
                                </div>
                            </>
                        )
                    })
                }

            </div>
          
        </>
    )
}

export default Movie
