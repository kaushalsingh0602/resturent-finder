import ResturentCard from "./ResrurentCard";

// import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const[ListOfResturent,setListOfResturent]=useState([]) 
  const[resList,setList]=useState([]) 


   useEffect(()=>{
    fetchData()
  },[])

  const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")

    const json=await data.json()
    console.log (json)
    // optinal chaning ?
    setListOfResturent(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setList(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(ListOfResturent.length===0){
    return<Shimmer/>  
  }
   
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="Filterd">
        <button
          className="filter-button"
          onClick={() => {
           const filterdList = ListOfResturent.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturent(filterdList)
          }}>Top Rated Resturent
          
        </button>
      </div>
      <h3>Top Rated Resturent</h3>
      <div className="res-contener">
        {ListOfResturent.map((restaurant, index) => (
          <ResturentCard key={restaurant.info.id} resData={restaurant} />
        ))} 
      </div>
      <h3>    All Nearby Resturent</h3>
      <div className="res-contener">
         {resList.map((restaurant, index) => (
          <ResturentCard key={restaurant.info.id} resData={restaurant} />
        ))}
       </div> 
    </div>
  );
};

export default BodyComponent;
