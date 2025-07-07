
import { useState } from 'react'
import './Cards.css'
 import { useDispatch } from 'react-redux'

 export function Cards() {
 const flowers=[
  {
    "type": "Plants",
    "name": "Boncellensis Secullant",
    "stars": 3,
    "price": "34.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg"
  },
  {
    "type": "Cactus",
    "name": "Cleistocactus",
    "stars": 2,
    "price": "28.00",
    "offPrice": "25.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg"
  },
  {
    "type": "Plants",
    "name": "Green Soil Lotus",
    "stars": 4,
    "price": "54.50",
    "offPrice": "34.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg"
  },
  {
    "type": "Plants",
    "name": "Money Plant",
    "stars": 5,
    "price": "23.00",
    "offPrice": "20.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg"
  },
  {
    "type": "Plants",
    "name": "Old Lady Cactus",
    "stars": 3,
    "price": "15.00",
    "offPrice": "12.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg"
  },
  {
    "type": "Plants",
    "name": "Piorro Quisquam",
    "stars": 3,
    "price": "32.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg"
  },
  {
    "type": "Plants",
    "name": "Rattle Snake Tail",
    "stars": 1,
    "price": "45.00 ",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg"
  },
  {
    "type": "Cactus",
    "name": "Star Cacuts",
    "stars": 2,
    "price": "34.00",
    "offPrice": "32.00",
    "src": "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg"
  }
]

const dispatch=useDispatch();
const [showAlert,setShowAlert]=useState(false);

function handleClick(price) {

dispatch({type:"SUM",payload:Number(price)});

setShowAlert(true);

     setTimeout(()=>{

        setShowAlert(false)
     },4000)
};



  return (
  
      <div>
        <div className="container">
      {flowers.map((flower,index)=>

    <div className="card" style={{width: "16rem"}} key={index}>
  <img src={flower.src} className="card-img-top" alt={flower.name}/>
  <div className="card-body">
     <p className="card-text" style={{color:"gray"}}>{flower.type}</p>
    <p className="card-text">{flower.name}</p>
      <p style={{color:"gold", fontSize:"20px"}}>
        
        {"★".repeat(flower.stars)}{"☆".repeat(5-flower.stars)}</p>


       <p className="card-text" >
        
        {flower.offPrice?(
            <span className='price-part'>
          <span style={{color:"gray", textDecoration:"line-through"}}>${flower.price}</span>
        <span style={{color:"green"}}>${flower.offPrice}</span>
               </span>
        ):(<span style={{color:"gray"}}>${flower.price}</span>)}
        </p>
  </div>

  <i className="bi bi-basket2-fill basket" onClick={()=>handleClick(flower.offPrice || flower.price)}></i>
  </div>



      )}
      </div>
     {showAlert && ( <div className="alert position-fixed bottom-0 start-0  ms-3 alert-success" role="alert">
  Plant added to basket shop!
</div>)}


      </div>
   
  )
}
