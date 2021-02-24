import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import './ReviewCard.css'
import StarIcons from './StarIcons';


const ReviewCard = ({post}) => {

const[more,setMore]=useState(false);


    return (
        <div className="review-card-container">
         <div className="review-card-container-title"> {post.title}</div>  
         <div  className="review-card-container-comment">" {post.comment} "</div>  
         <div  className="review-card-container-usefulness">Usefulness:{post.usefulness}</div>  
         {post.friend?<div  className="review-card-container-name">-- {post.reviewer.name}</div>:""} 
         <Button variant="contained" color="primary" onClick={()=>setMore(!more)}>Show more</Button> 
          {more?<div> <StarIcons limit={post.ratings.Overall} name="Overall :"/>
            <StarIcons limit={post.ratings.delivery_time} name="Delivery time :"/>
            <StarIcons limit={post.ratings.discounts_and_offers} name= "Discounts & offers :"/>
            <StarIcons limit={post.ratings.matches_description} name="Matches Description :"/>
            <StarIcons limit={post.ratings.matches_photo} name="Matches photo :"/>
            <StarIcons limit={post.ratings.packaging} name="Packaging :"/>
            <StarIcons limit={post.ratings.price} name ="price :"/> </div>:<div></div>} 
            
        
         



        </div>
    )
}

export default ReviewCard
