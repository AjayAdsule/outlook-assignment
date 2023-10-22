import { useState } from "react"


const Filter = () => {
  const [read,setRead]=  useState(false)
  const [favorite,setFavorite] = useState(false)
  const handleRead=()=>{
    console.log("read");
  }
  return (
    <header className="filter">
      <button className="filter-btn">Unread</button>
      <button className="filter-btn" onClick={handleRead}>Read</button>
      <button className="filter-btn">Favorite</button>
    </header>
  )
}

export default Filter
