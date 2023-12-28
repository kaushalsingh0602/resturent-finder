import ResturentCard from "./ResrurentCard";

import resList from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const[ListOfResturent,setListOfResturent]=useState([]) 
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="Filterd">
        <button
          className="filter-button"
          onClick={() => {
           const filterdList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfResturent(filterdList)
          }}>Top Rated Resturent
          
        </button>
      </div>
      <h3>Top Rated Resturent</h3>
      <div className="res-contener">
        {ListOfResturent.map((restaurant, index) => (
          <ResturentCard key={restaurant.data.id} resData={restaurant} />
        ))} 
      </div>
      <h3>    All Nearby Resturent</h3>
      <div className="res-contener">
         {resList.map((restaurant, index) => (
          <ResturentCard key={restaurant.data.id} resData={restaurant} />
        ))}
       </div> 
    </div>
  );
};

export default BodyComponent;
