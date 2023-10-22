/* eslint-disable react/prop-types */
import { useState } from "react";
import { Cards, Filter } from "../Component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = ({ email }) => {
  const navigate= useNavigate()
  const [read, setRead] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [home,setIsHome]=useState(true)
  const isReads = useSelector((state) => state.email.isRead);
  const isFavorite = useSelector((state) => state.email.favorite);
  console.log(isFavorite);
  console.log(isReads);
  const handleRead = () => {
    setRead(true);
    setFavorite(false);
    setIsHome(false)
  };
  const handleUnread=()=>{
    setIsHome(true)
    setFavorite(false)
    setRead(false)
  }

  const handleFavorite=()=>{
    setFavorite(true)
    setIsHome(false)
    setRead(false)
  } 

  return (
    <>
      <header className="filter">
        <button className="filter-btn" onClick={()=>navigate("/")}>Home</button>
        <button className="filter-btn" onClick={handleUnread}>Unread</button>
        <button className="filter-btn" onClick={handleRead}>
          Read
        </button>
        <button className="filter-btn" onClick={handleFavorite}>Favorite</button>
      </header>
      <section className="home-cards">
        {read && isReads.map((item)=> <Cards item={item} key={item.id} />)}
        {home && email.map((item) => <Cards item={item} key={item.id} />)}
        {favorite && isFavorite.map((item) => <Cards item={item} key={item.id} />)}
      </section>
    </>
  );
};

export default Home;
