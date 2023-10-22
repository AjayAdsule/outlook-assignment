import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

/* eslint-disable react/prop-types */
const Cards = ({item }) => {
    const date = new Date(item.date);
    const dateFormat = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    const router= useNavigate()
  return (
    <div className="card" onClick={()=>router(`/email/${item.id}`)}>
      <div className="icon">
        <Icon/>
      </div>
      <div className="card-inner">
        <div>
          <span className="font-light">From :</span>
          <span className="font-bold">
            {" "}
            {item.from.name} {`<${item.from.email}>`}{" "}
          </span>
        </div>
        <div>
          <span className="font-light">Subject</span>
          <span className="font-bold"> {item.subject}</span>
        </div>
        <div className="content">
          <p>{item.short_description}</p>
          <p>
            {dateFormat} {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
