import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { Icon, MiniCard } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, addToIsRead } from "../Fatures/OutLookSlice";

const CheckMail = ({ email }) => {
  const { id } = useParams();
  const [singleMail, setSingleMail] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.email.favorite);
  const data1 = useSelector((state) => state.email.isRead);

  let datas = email;
  const navigate= useNavigate()
  const [read, setRead] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [home,setIsHome]=useState(true)
  const isReads = useSelector((state) => state.email.isRead);
  const isFavorite = useSelector((state) => state.email.favorite);
 
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

  const handleFavorites=()=>{
    setFavorite(true)
    setIsHome(false)
    setRead(false)
  }

  const getCurrentUser =
    datas &&
    datas.find((item) => {
      return item.id === id;
    });
 

  // const date = new Date(getCurrentUser.date);
  //   const dateFormat = date.toLocaleDateString();
  //   const time = date.toLocaleTimeString();

  const fetchMessage = async () => {
    try {
      const res = await axios.get(
        `https://flipkart-email-mock.now.sh/?id=${id}`
      );
      if (res.data) {
        setSingleMail(res.data);
      }
    } catch (error) {
      console.error("Error while fetching emaiil", error);
    }
  };
  useEffect(() => {
    fetchMessage();
  }, [id, getCurrentUser]);

  const handleFavorite = () => {
    dispatch(addToFavorite(getCurrentUser));
  };

  return (
    <>
    <header className="filter">
        <button className="filter-btn" onClick={()=>navigate("/")}>Home</button>
        <button className="filter-btn" onClick={handleUnread}>Unread</button>
        <button className="filter-btn" onClick={handleRead}>
          Read
        </button>
        <button className="filter-btn" onClick={handleFavorites}>Favorite</button>
      </header>
    <section className="single-email">
      <div className="left">
        {read && isReads.map((item)=> <MiniCard item={item} key={item.id} />)}
        {home && email.map((item) => <MiniCard item={item} key={item.id} />)}
        {favorite && isFavorite.map((item) => <MiniCard item={item} key={item.id} />)}
      </div>
      <div className="right">
        <div className="user-profile">
          <div className="profile-icon">
          <Icon/>
          </div>
          <div className="subjects">
            <h4>Lorem ispum</h4>
            <p>2/26/2020 8:35:05 PM</p>
          </div>
          <button onClick={handleFavorite} className="btn">
            Add to favourite
          </button>
          <div className="profile-icon">
            
          </div>
        </div>
        <div className="message">{ReactHtmlParser(singleMail.body)}</div>
      </div>
    </section>
    </>
  );
};

export default CheckMail;
