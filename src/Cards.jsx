import { useEffect, useState } from "react";
import Card from "./Card";
import AddToCard from "./AddToCard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Cards = ({sendData}) => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() =>{
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourseData(data))
  },[]
  )
  //console.log(courseData);
  //Add to Card
  const [addCard, setAddCard] = useState([])
  const [price, setPrice] = useState(0)
  const [hour, setHour] = useState(0)
console.log(price);
  const cardData=(data) =>{
    
    if(addCard.find(element => element.id === data.id)){
      return
    }
    else{
      const saveCard = [...addCard, data]
      setAddCard(saveCard);
      let totalPrice = price + data.price;
      setPrice(totalPrice)
      const totalHour = hour + data.hour;
      setHour(totalHour)
    }
    
    
  }
  const notify = () => toast.success('Hello, world!');
  console.log(price);
    return (
        <div className="">
          <h2>cards</h2>
          <div className="grid grid-cols-3">
            <div className="grid grid-cols-3 col-span-2  gap-4">
            {
              courseData.map(element => <Card cardData={cardData} key={element.id} data={element}></Card>)
            } 
            </div>
            <div>
              Add to card
              <h3>Credit Hour Remaining : {(20 - hour) >= 0 ? (20 - hour) : '' }</h3>
              {
                addCard.map(
                  element => <AddToCard addCard={element} key={element.id}></AddToCard>
                )
              }
              <h2>Total hour : {(hour <= 20)? hour: toast('Enough')}</h2>
              <h2>Total Price : {price}</h2>
              <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce />
            </div>
          </div> 
        </div>
    );
};

export default Cards;