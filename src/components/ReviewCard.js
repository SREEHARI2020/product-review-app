import React, { useState } from 'react'
import './ReviewCard.css'
import StarIcons from './StarIcons';


const ReviewCard = ({post}) => {

const[more,setMore]=useState(false);


    return (
        <div className="review-card-container">
         <div className="review-card-container-title">Title: {post.title}</div>  
         <div  className="review-card-container-comment"> {post.comment}</div>  
         <div  className="review-card-container-usefulness"> {post.usefulness}</div>  
         <div  className="review-card-container-name"> {post.friend?post.reviewer.name:""}</div> 
         <button onClick={()=>setMore(!more)}>Show more</button> 
          {more?<div> <StarIcons limit={post.ratings.Overall}/>
            <StarIcons limit={post.ratings.delivery_time}/>
            <StarIcons limit={post.ratings.discounts_and_offers}/>
            <StarIcons limit={post.ratings.matches_description}/>
            <StarIcons limit={post.ratings.matches_photo}/>
            <StarIcons limit={post.ratings.packaging}/>
            <StarIcons limit={post.ratings.price}/> </div>:<div></div>} 
            
        
         



        </div>
    )
}

export default ReviewCard
