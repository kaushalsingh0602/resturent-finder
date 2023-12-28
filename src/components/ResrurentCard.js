

import { IMAGE_URL } from "../utils/constants"

const ResturentCard=({resData})=>{
    // const {resData}=props 


    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className ="res-logo" alt="logo" src={IMAGE_URL+resData.data.cloudinaryImageId}/>
            <h1>{resData.data.name}</h1>
            <h4>{resData.data.cuisines}</h4>
            <div className="rating-time" style={{display:"flex"}}>
                <h4 > {resData.data.avgRating}</h4>
                <h4 >{resData.data.slaString}</h4>
                
            </div>
            <h4 >{resData.data.costForTwoString}</h4>
        </div>
    )
}

export default ResturentCard