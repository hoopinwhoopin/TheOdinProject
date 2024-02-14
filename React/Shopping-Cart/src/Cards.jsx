import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Cards(props){
    
    const [data,setData] = useState([]);
    useEffect(()=>{
    setData(props.data);
    },[props.data])
   let num=data?.id-1;
   console.log(num);
    return(
        <div className="flex flex-1">
            <div className="LandingImage">
                <img className="" src={data?.image}  />
            </div>
            <div className="cardInfo">
                <h1>{data?.title}</h1>
                <h3>${data?.price}</h3>
                <button><Link to={`/${num}`}>View More</Link></button>
            </div>
        </div>
    )
}

export default Cards;