import { useNavigate } from "react-router-dom";
import "./MiniCard.css"
import { useDispatch } from "react-redux";
import { addToIsRead } from "../Fatures/OutLookSlice";
import Icon from "./Icon";

const MiniCard = ({item}) => {
    const date = new Date(item.date);
    const dateFormat = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    const dispatch= useDispatch()
  const router= useNavigate()
  const handleRead=(id)=>{
    dispatch(addToIsRead(item))
    router(`/email/${id}`)
  }
  return (
    <div className='side-card' onClick={()=>handleRead(item.id)}>
        <div className="left-card">
            <Icon/>
        </div>
        <div className="right-card">
        <div>
          <span className="font-light ">From :</span>
          <span className="font-bold">
          {item.from.name} {`<${item.from.email}>`}{" "}
          </span>
        </div>
        <div>
          <span className="font-light">Subject</span>
          <span className="font-bold">{item.subject}</span>
        </div>
        <div className="card-bottom ">
          <p>de{item.short_description.slice(0,15)}...</p>
          <p>
          {dateFormat} {time}
          </p>
        </div>
        </div>
    </div>
  )
}

export default MiniCard
