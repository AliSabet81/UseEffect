import { useEffect, useState } from "react";

const Card = () => {
    const [update,setUpdate] = useState(0)
    const [review,setReview] = useState(0)

    useEffect(()=>{
        console.log('call')
    },[])
    return ( 
    <h1>Card + {'update' + update} {'review' + review}
        <button onClick={()=> setUpdate(update + 1)}>update</button>
        <button onClick={()=> setReview(review + 1)}>Review</button>
    </h1> );
}
 
export default Card;