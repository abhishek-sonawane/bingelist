import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../GlobalState'



function Watchlist() {
  const {watchList} = useContext(GlobalContext)
  return (
    <div>
      {watchList.map((movie)=>{
      return <p>{movie.title}</p>
      })}
    </div>
  )
}

export default Watchlist;