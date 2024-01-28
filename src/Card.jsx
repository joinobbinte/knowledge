import { FiDollarSign } from 'react-icons/fi';
import { FaBookOpen } from "react-icons/fa6";

const Card = ({data, cardData}) => {
    const {id, cover, title, price,details, hour} = data;
    return (
        <div className="w-full p-5  border">
            <img className="w-full h-48" src={cover} alt="" />
            <h3>{title}</h3>  
            <p>{details}</p>
            <div  className='flex items-center gap-5'>
            <FiDollarSign /> 
            <span> Price : {price}</span>
            <FaBookOpen /> 
            <span>Cradit : {hour}</span>

            </div>
            <button onClick={()=>cardData(data)} className='bg-sky-500 w-full p-4'> Submit</button>
        </div>
    );
};

export default Card;